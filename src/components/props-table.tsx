import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Prop {
  prop: string;
  type: string;
  default: string;
  description: string;
}

interface PropsTableProps {
  props: Prop[];
}

export const PropsTable: React.FC<PropsTableProps> = ({ props }) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Prop</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="w-[150px]">Default</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{prop.prop}</TableCell>
              <TableCell><code className="bg-muted px-2 py-1 rounded text-sm">{prop.type}</code></TableCell>
              <TableCell><code className="bg-muted px-2 py-1 rounded text-sm">{prop.default}</code></TableCell>
              <TableCell>{prop.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};