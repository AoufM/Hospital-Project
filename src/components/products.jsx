import React from 'react';
import mimg1 from './images/almox.jpeg';
import mimg2 from './images/antacid.jpeg'
import mimg3 from './images/antihistamine.jpeg'
import mimg4 from './images/aspirin.jpeg'
import mimg5 from './images/biotin.jpeg'
import mimg6 from './images/crocin.jpeg'
import mimg7 from './images/omega.jpeg'
import mimg8 from './images/paracetomol.jpeg'
import mimg9 from './images/pudin.jpeg'




export const products=[
    {
        id:1,
        title:"Amoxcycillin",
        description:"Almox 500",
        price:'200',
        img: <img src={mimg1} alt="" />,
        quantity:1,
    },
    {
        id:2,
        title:"Antacid",
        description:"Antacid",
        price:'300',
        img: <img src={mimg2}  alt=""/>,
        quantity:1,
    },
    {
        id:3,
        title:"Antihistamine",
        description:"Antihistamine",
        price:'200',
        img: <img src={mimg3} alt=""/>,
        quantity:1,
    },
    {
        id:4,
        title:"Aspirin",
        description:"Aspirin",
        price:'200',
        img: <img src={mimg4} alt=""/>,
        quantity:1,
    },
    {
        id:5,
        title:"Biotin",
        description:"Biotin",
        price:'200',
        img: <img src={mimg5} alt=""/>,
        quantity:1,
    },
    {
        id:6,
        title:"Crocin",
        description:"Crocin",
        price:'200',
        img: <img src={mimg6} alt=""/>,
        quantity:1,
    },
    {
        id:7,
        title:"Omega",
        description:"Omega",
        price:'200',
        img: <img src={mimg7} alt=""/>,
        quantity:1,
    },
    {
        id:8,
        title:"Paracetomol",
        description:"Paracetomol",
        price:'200',
        img: <img src={mimg8} alt=""/>,
        quantity:1,
    },
    {
        id:9,
        title:"Pudin hara",
        description:"Pudin hara",
        price:'200',
        img: <img src={mimg9} alt=""/>,
        quantity:1,
    },
]
