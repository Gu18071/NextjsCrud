import { Avatar, Button, HStack, Spacer } from '@chakra-ui/react'
import {
  Text,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../../Components/ColorModeSwitcher'
import api from '../../../services/api';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';


interface ClienteAPI {
    id: number,
    nome: string,
    cpf: number,
    email: string,
    telefone: number,
    endereco: string,
    idClinica: number,
}



const GetDadosClientes = () => {

  const router = useRouter()
  const { id } = router.query                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (data: any) => {
      const request = await api.put(`https://localhost:7088/api/Cliente/${id}`, data)
      router.push('/')
  }

  useEffect(() => {
      axios.get(`https://localhost:7088/api/Cliente/${id}`)
      .then((response) => {
        reset(response.data)
      })
  }, []);

    

  return (
    <>
    <Box margin="4">
        <Flex margin="4" paddingBottom="6">
                <Box>
                <Button fontSize="sm" alignSelf="flex-end" colorScheme="teal" onClick={() => router.push('/')} >Voltar</Button>
                </Box>
                <Spacer />
                <Box>
                <Text color="light" fontSize='3xl' fontFamily="Open Sans"  justifyContent="center" textAlign="center">Dados do cliente</Text>
                </Box>
                <Spacer />
                <Box>
                <ColorModeSwitcher />
                </Box>
            </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack marginY="1rem">
            <Box>
                <Flex>
                    <Avatar size='lg' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                    <Box ml='3'>  
                            <FormControl margin="lrem">
                            <Input id='nome' type='text' size='sm' disabled border="none"   { ...register('nome') } />
                        </FormControl>
                        <FormControl margin="lrem">
                            <Input id='email' type='email' size='sm' disabled border="none"  { ...register('email')} />
                        </FormControl>
                    </Box>
            </Flex>
          </Box>
        </HStack>
        <VStack>
            <FormControl margin="lrem">
                <FormLabel>Telefone</FormLabel>
                <Input id='telefone' type='number'disabled   { ...register('telefone') } />
            </FormControl>
            <FormControl margin="lrem">
                <FormLabel>CPF</FormLabel>
                <Input id='cpf' type='number' disabled   { ...register('cpf') } />
            </FormControl>
            <FormControl margin="lrem">
                <FormLabel>Endereço</FormLabel>
                <Input id='endereco' type='text' disabled  { ...register('endereco') } />
            </FormControl>
            <FormControl margin="2rem" >
                <FormLabel>idClinica</FormLabel>
                <Input id='clinicaId' type='number'disabled  { ...register('clinicaId') } />
            </FormControl>
        </VStack>
    </form>
      </Box>
    </>
  )
}

export default GetDadosClientes