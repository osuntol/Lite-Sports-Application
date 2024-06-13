import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Player } from '@/app/utils/interface';

interface CardWithFormProps {
  players: Player[];
  onPhotoClick: (player: Player) => void;
}

export function CardWithForm({ players, onPhotoClick }: CardWithFormProps) {
  return (
    <div className="flex flex-wrap justify-center">
      {players.map((player) => (
        <Card key={player.playerId} className='w-[350px] m-4'>
          <CardHeader>
            <CardTitle>{player.firstName} {player.lastName}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='results-card'>
              <img
                onClick={() => onPhotoClick(player)}
                className='flex items-center py-6 mx-auto cursor-pointer'
                src={player.headshotUrl}
                alt={`${player.firstName} ${player.lastName}`}
              />
            </div>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button>Bio</Button>
            <Button>Compare</Button>
            <Button>Stats</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}