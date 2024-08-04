'use client'

export default function ContactForm () {
    return (
        <div  className="bg-gradient-to-r from-[#181818] via-[#44424A] to-[#BFBFBF] w-2/4 h-full rounded-lg mx-auto text-center">
            <div>
                <h1 className='text-5xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>Contactez Moi !!!</h1>
            </div>
            <br />
            
            <div className="border-2 border-blue-800 w-3/4 mx-auto rounded-lg "><input placeholder="Entrer votre Nom" className="bg-transparent border-2 border-blue-500 w-2/4 mx-auto p-2 my-2 rounded-lg"></input></div>
            <br />
            <div className="border-2 border-blue-800 w-3/4 mx-auto rounded-lg"><input placeholder="Entrer Votre Prénom" className="bg-transparent border-2 border-blue-500 w-2/4 mx-auto p-2 my-2 rounded-lg"></input></div>
            <br />
            <div className="border-2 border-blue-800 w-3/4 mx-auto rounded-lg"><input placeholder="Entre votre Adresse Mail" className="bg-transparent border-2 border-blue-500 w-2/4 mx-auto p-2 my-2 rounded-lg"></input></div>
        </div>
    )
} 