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
    email: string,
}



const GetDadosClinicas = () => {

  const router = useRouter()
  const { id } = router.query                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (data: any) => {
      const request = await api.put(`https://localhost:7088/api/Clinica/${id}`, data)
      router.push('/')
  }

  useEffect(() => {
      axios.get(`https://localhost:7088/api/Clinica/${id}`)
      .then((response) => {
        reset(response.data)
      })
  }, []);

    

  return (
    <>
    <Box margin="4">
        <Flex margin="4" paddingBottom="6">
                <Box>
                <Button fontSize="sm" alignSelf="flex-end" colorScheme="teal" onClick={() => router.push('/ListaClinicas')} >Voltar</Button>
                </Box>
                <Spacer />
                <Box>
                <Text color="light" fontSize='3xl' fontFamily="Open Sans"  justifyContent="center" textAlign="center">Dados da clinica</Text>
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
            </Flex>
          </Box>
        </HStack>
        <VStack>
            <FormControl margin="lrem">
                <FormLabel>Nome</FormLabel>
                <Input id='nome' type='text'disabled   { ...register('nome') } />
            </FormControl>
            <FormControl margin="lrem">
                <FormLabel>Email</FormLabel>
                <Input id='email' type='text' disabled   { ...register('email') } />
            </FormControl>
        </VStack>
    </form>
      </Box>
    </>
  )
}

export default GetDadosClinicas