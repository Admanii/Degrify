// import React from 'react'

// function EditShortcut() {
//     return (
//         <div className="max-w-2xl mx-auto">

//             <div className="p-4 max-w-md bg-grey-200 rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
//                 <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-lg font-bold leading-none text-gray-900 dark:text-white">Latest Edit Requests</h3>
//                     <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
//                         View all
//                     </a>
//                 </div>
//                 <div className="flow-root">
//                     <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
//                         <li className="py-3 sm:py-4">
//                             <div className="flex items-center space-x-4">
//                                 <div className="flex-shrink-0">
//                                     <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image"></img>
//                                 </div>
//                                 <div className="flex-1 min-w-0">
//                                     <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
//                                         Muhammad Ahmed
//                                     </p>
//                                     <p className="text-sm text-gray-500 truncate dark:text-gray-400">
//                                         BSCS
//                                     </p>
//                                 </div>
//                                 <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
//                                     19717
//                                 </div>
//                             </div>
//                         </li>
//                         <li className="py-3 sm:py-4">
//                             <div className="flex items-center space-x-4">
//                                 <div className="flex-shrink-0">
//                                     <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"></img>
//                                 </div>
//                                 <div className="flex-1 min-w-0">
//                                     <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
//                                         Ahmed Edhi
//                                     </p>
//                                     <p className="text-sm text-gray-500 truncate dark:text-gray-400">
//                                         BSCS
//                                     </p>
//                                 </div>
//                                 <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
//                                     19535
//                                 </div>
//                             </div>
//                         </li>
//                         <li className="py-3 sm:py-4">
//                             <div className="flex items-center space-x-4">
//                                 <div className="flex-shrink-0">
//                                     <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael image"></img>
//                                 </div>
//                                 <div className="flex-1 min-w-0">
//                                     <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
//                                         Muhammad Osama
//                                     </p>
//                                     <p className="text-sm text-gray-500 truncate dark:text-gray-400">
//                                         BBA
//                                     </p>
//                                 </div>
//                                 <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
//                                     18554
//                                 </div>
//                             </div>
//                         </li>
//                         <li className="py-3 sm:py-4">
//                             <div className="flex items-center space-x-4">
//                                 <div className="flex-shrink-0">
//                                     <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Lana image"></img>
//                                 </div>
//                                 <div className="flex-1 min-w-0">
//                                     <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
//                                         Pawan Kumar
//                                     </p>
//                                     <p className="text-sm text-gray-500 truncate dark:text-gray-400">
//                                         BSEM
//                                     </p>
//                                 </div>
//                                 <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
//                                     19228
//                                 </div>
//                             </div>
//                         </li>
//                         <li className="pt-3 pb-0 sm:pt-4">
//                             <div className="flex items-center space-x-4">
//                                 <div className="flex-shrink-0">
//                                     <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Thomas image"></img>
//                                 </div>
//                                 <div className="flex-1 min-w-0">
//                                     <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
//                                         Feroze
//                                     </p>
//                                     <p className="text-sm text-gray-500 truncate dark:text-gray-400">
//                                         BSAF
//                                     </p>
//                                 </div>
//                                 <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
//                                     18641
//                                 </div>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default EditShortcut

//TRY 2

// import React from 'react';


// interface Props {
//     imgSrc: string;
//     name: string;
//     degree: string;
//     id: string;
// }

// function EditShortcutItem({
//     imgSrc,
//     name,
//     degree,
//     id,
// }: Props) {
//     return (
//         <li className="py-3 sm:py-4">
//             <div className="flex items-center space-x-4">
//                 <div className="flex-shrink-0">
//                     <img className="w-8 h-8 rounded-full" src={imgSrc} alt={`${name} image`} />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                     <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{name}</p>
//                     <p className="text-sm text-gray-500 truncate dark:text-gray-400">{degree}</p>
//                 </div>
//                 <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
//                     {id}
//                 </div>
//             </div>
//         </li>
//     );
// }

// function EditShortcutList({ items }) {
//     return (
//         <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
//             {items.map((item) => (
//                 <EditShortcutItem
//                     key={item.id}
//                     imgSrc={item.imgSrc}
//                     name={item.name}
//                     degree={item.degree}
//                     id={item.id}
//                 />
//             ))}
//         </ul>
//     );
// }

// function EditShortcut() {
//     const latestEditRequests = [
//         {
//             id: 19717,
//             name: 'Muhammad Ahmed',
//             degree: 'BSCS',
//             imgSrc: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
//         },
//         {
//             id: 19535,
//             name: 'Ahmed Edhi',
//             degree: 'BSCS',
//             imgSrc: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
//         },
//         {
//             id: 18554,
//             name: 'Muhammad Osama',
//             degree: 'BBA',
//             imgSrc: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
//         },
//         {
//             id: 19228,
//             name: 'Pawan Kumar',
//             degree: 'BSEM',
//             imgSrc: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg',
//         },
//         {
//             id: 18641,
//             name: 'Feroze',
//             degree: 'BSAF',
//             imgSrc: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
//         },
//     ];

//     return (
//         <div className="max-w-2xl mx-auto">
//             <div className="p-4 max-w-md bg-grey-200 rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
//                 <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
//                         Latest Edit Requests
//                     </h3>
//                     <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
//                         View all
//                     </a>
//                 </div>
//                 <div className="flow-root">
//                     <EditShortcutList items={latestEditRequests} />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default EditShortcut;

//TRY 3
import React from 'react';

interface ItemProps {
    imgSrc: string;
    name: string;
    degree: string;
    id: string;
}
function getRandomColor() {
    const colors = ['bg-pink-500','bg-pink-800','bg-amber-800', 'bg-lime-600','bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500','bg-red-800', 'bg-blue-800', 'bg-green-800', 'bg-yellow-800'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

function EditShortcutItem({ imgSrc, name, degree, id }: ItemProps) {
    const randomColor = `bg-${Math.floor(Math.random() * 16777215).toString(16)}`;
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full ${getRandomColor()}  flex items-center justify-center`}>
                        <p className="text-center text-sm font-bold text-white">
                            {Array.from(`${name}`)[0]}
                        </p>
                    </div>
                    {/* <img className="w-8 h-8 rounded-full" src={imgSrc} alt={`${name} image`} /> */}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">{name}</p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">{degree}</p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {id}
                </div>
            </div>
        </li>
    );
}

interface ListProps {
    items: ItemProps[];
}

function EditShortcutList({ items }: ListProps) {
    return (
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {items.map((item) => (
                <EditShortcutItem key={item.id} {...item} />
            ))}
        </ul>
    );
}

function EditShortcut() {
    const latestEditRequests = [
        {
            id: '19717',
            name: 'Muhammad Ahmed',
            degree: 'BSCS',
            imgSrc: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
        },
        {
            id: '19535',
            name: 'Ahmed Edhi',
            degree: 'BSCS',
            imgSrc: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
        },
        {
            id: '18554',
            name: 'Muhammad Osama',
            degree: 'BBA',
            imgSrc: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
        },
        {
            id: '19228',
            name: 'Pawan Kumar',
            degree: 'BSEM',
            imgSrc: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg',
        },
        {
            id: '18641',
            name: 'Feroze',
            degree: 'BSAF',
            imgSrc: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        },
        {
            id: '19717',
            name: 'Muhammad Ahmed',
            degree: 'BSCS',
            imgSrc: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
        },
    ];

    return (
        <div className="max-w-2xl mx-auto">
            <div className="p-4 max-w-none bg-grey-200 border shadow-md sm:p-8 bg-gray-0 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
                        Latest Edit Requests
                    </h3>
                    <a href="/edit/requests" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        View all
                    </a>
                </div>
                <div className="flow-root">
                    <EditShortcutList items={latestEditRequests} />
                </div>
            </div>
        </div>
    );
}

export default EditShortcut;