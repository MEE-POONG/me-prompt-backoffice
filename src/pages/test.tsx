import React, { useEffect, useState } from 'react';
import { LayOut } from '@/components/Layout/admin'


const TestPage: React.FC = () => {
    const [input, setInput] = useState('');
    const [commands, setCommands] = useState<string[]>(['Command 1', 'Command 2', 'Command 3']);
    const [filteredCommands, setFilteredCommands] = useState<string[]>([]);

    useEffect(() => {
        setFilteredCommands(
            commands.filter(command => command.toLowerCase().includes(input.toLowerCase()))
        );
    }, [input, commands]);

  return (
    <LayOut>
        <div className="relative">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a command..."
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            {input && (
                <ul className="absolute left-0 right-0 mt-1 max-h-60 overflow-auto border border-gray-300 rounded bg-white shadow-lg">
                    {filteredCommands.map((command, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            {command}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </LayOut>
  )
}

export default TestPage;