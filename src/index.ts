import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

enum States {
    MG = "Minas Gerais",
    SP = "São Paulo"
}

interface IAddress {
    street:string;
    number:number;
    state:States;
}

interface IProducts {
    id: number;
    name: string;
    price: number;
    description?: string;
    address: IAddress;
}

let products: IProducts[] = []


app.get('/produtos', (req: Request, res: Response) => {


    const newProduct: IProducts = {
        id: Math.random(),
        name: "Batedeira",
        price: 300,
        description: "Batedeira muito boa",
        address: {
            street: "Rua dos bobos",
            number: 0,
            state: States.SP
        }
    }
    products.push(newProduct)


    return res.json(products)
})

app.listen(3000, () => {
    console.log('Servidor rodando')
})