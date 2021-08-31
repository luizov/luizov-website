import Image from 'next/image';

export default function Avatar({ name, picture }) {
    return (
        <div className="flex items-center">
            <img src={picture} className="w-12 h-12 rounded-full mr-3" alt={name} />
            <div className="text-xl font-medium text-electric-700 dark:text-blue-150">
                {name}
            </div>
        </div>
    )
}
