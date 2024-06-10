'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import React, { useState } from 'react';
import { fetchPlayerData } from '@/app/utils/queries/get-players';
import NestedModal from '@/components/modal/modal';
import { Player } from '@/app/utils/interface';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

interface ApiResponse {
  body: Player[];
  totalItems: number;
  pageSize: number;
  lastEvaluatedKey: string | null;
  responseCode: number;
}

export default function HeroSection() {
  const [playerData, setPlayerData] = useState<Player[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const formSchema = z.object({
    playername: z.string().min(4, {
      message: "Player name must be at least 4 characters.",
    })
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      playername: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const fullName = values.playername.trim();
    const nameParts = fullName.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

    try {
      const response: ApiResponse = await fetchPlayerData(firstName, lastName);
      setPlayerData(response.body); 
    } catch (error) {
      console.error('Error fetching player data:', error);
    }
  }

  function handlePhotoClick(player: Player) {
    setSelectedPlayer(player);
    setIsModalOpen(true); 
  }

  return (
    <section>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          Welcome to Realm Rivals
        </h1>
        <p className='mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
          Search & Compare current & retired NBA players statistics
        </p>
        <div className='flex flex-col gap-2 items-center max-w-xs mx-auto'>
          <Form {...form}>
            <form className="flex flex-col items-center mx-auto" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="playername"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Player Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Search A Player..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className='mt-4' type="submit">Submit</Button>
            </form>
          </Form>
        </div>
        <div>
          {playerData.length > 0 ? (
            playerData.map((player) => (
              <div key={player.playerId} className='player-card'>
                <img
                  onClick={() => handlePhotoClick(player)}
                  className='flex items-center py-6 mx-auto cursor-pointer'
                  src={player.headshotUrl}
                  alt={`${player.firstName} ${player.lastName}`}
                />
                <h2>{player.firstName} {player.lastName}</h2>
                <p>Teams: {player.teams.join(', ')}</p>
              </div>
            ))
          ) : (
            <p className='py-5 items-center'>REALM RIVALS</p>
          )}
          {selectedPlayer && (
            <NestedModal player={selectedPlayer} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          )}
        </div>
      </div>
    </section>
  );
}
