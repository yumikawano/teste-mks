import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import Link from 'next/link'
import { product } from "../entities/Products";
import { Card } from "react-bootstrap";
import { Loading } from "../components/Loading";
import { addToCart } from "../store/slices/cardSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

type productsProps = product | null


export async function getStaticProps() {
  const data = await fetch('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC')

  const products = await data.json()

  console.log(products)

  return {
    props: { products },
  }
}

export default function Products() {
  const [Products, setProducts]:any = useState()
  useEffect(() => {
      const fetch = async ():Promise<void | productsProps > => {
          try{
              const data = await getStaticProps()
              setProducts(data)
         } catch{
              toast.error('Erro ao carregar produtos. Tente novamente', {
                  theme: 'colored'
              })
         }      
      }
      fetch()
  }, [])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAddToCart = (products:product) => {
  dispatch(addToCart(products))
  navigate('../pages/Cart/youorder.tsx')
  }
        return (   
            <>
            <Main>
                {!Products ? (
                    <Loading />
                ) : (
                    <>
                        {Products.map((products:product) => (
                            <ul key={products.id}>
                            <Card className='text-center shadow h-100' key={products.name}>
                                <Card.Img variant="top" src={products.image} alt={products.name} width={220} height={220}/>
                                <Card.Body className='d-flex flex-column align-items-center'>
                                <Card.Title as='h2' className='h5'>{products.name}</Card.Title>
                                <Card.Text>{products.description}</Card.Text>
                                <Card.Text as='h5'>{products.price}</Card.Text>
                                <Button onClick={() => handleAddToCart(products)}>Adicionar ao carrinho</Button>
                                </Card.Body>
                            </Card>
                            </ul>
                        ))}
                    </>
                )}                
          </Main>
          </>
        )
}

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`