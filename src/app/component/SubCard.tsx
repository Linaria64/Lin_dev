'use client'
import Image from "next/image";
import Face from '../../../public/laptop.jpg';

export default function SubCard () {
    return (
        
         <div className="bg-[#090909] w-1/3 text-white rounded-lg flex flex-col">
                <div className="w-24 mx-auto border border-white bg-[#38394E] rounded-lg text-white p-2"><h2>Projet Numéro 1</h2></div>
                <div>
                <Image className="rounded-lg"
                    src={Face}
                    alt="Logo Lin_Dev Néon"
                    width={300}
                    height={300}
                    />

                </div>
                <div className="w-24 mx-auto border border-white bg-[#38394E] rounded-lg text-white p-2"><h2>Voir plus</h2></div>

        </div>
    )
}