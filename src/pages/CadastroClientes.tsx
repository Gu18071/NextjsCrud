import type { NextPage } from 'next'
import { Button,HStack, Spacer } from '@chakra-ui/react'
import {
    Text,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    VStack,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from '../Components/ColorModeSwitcher'
import { useForm} from 'react-hook-form'
import api from '../services/api'
import { useRouter } from 'next/router'

interface UserFrontInfo {
    id: number,
    nome: string,
    cpf: number,
    email: string,
    telefone: number,
    endereco: string,
    clinicaId: number,
}

const CadastroClientes: NextPage = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data: any) => {
        const request = await api.post('/Cliente', data)
        router.push('/')
    }
    
    return (
        <Box margin="8">
             <Flex margin="4" paddingBottom="6">
                <Box>
                <Button fontSize="sm" alignSelf="flex-end" colorScheme="teal" onClick={() => router.push('/')} >Voltar</Button>
                </Box>
                <Spacer />
                <Box>
                <Text color="light" fontSize='3xl' fontFamily="Open Sans"  justifyContent="center" textAlign="center">Cadastro de Clientes</Text>
                </Box>
                <Spacer />
                <Box>
                <ColorModeSwitcher />
                </Box>
            </Flex>
            <form onSubmit={handleSubmit(onSubmit)}>
                <HStack marginY="0.5rem">
                    <FormControl margin="lrem">
                        <FormLabel>Nome</FormLabel>
                        <Input id='nome' type='text' placeholder='Nome' { ...register('nome', { required: true }) } />
                    </FormControl>
                    <FormControl margin="lrem">
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input id='email' type='email' placeholder='Digite o seu Email' { ...register('email', { required: true })} />
                    </FormControl>
                </HStack>
                <VStack>
                    <FormControl margin="lrem">
                        <FormLabel>Telefone</FormLabel>
                        <Input id='telefone' type='number' placeholder='Digite seu telefone' { ...register('telefone', { required: true }) } />
                    </FormControl>
                    <FormControl margin="lrem">
                        <FormLabel>CPF</FormLabel>
                        <Input id='cpf' type='number' placeholder='Digite seu CPF' { ...register('cpf', { required: true }) } />
                    </FormControl>
                    <FormControl margin="lrem">
                        <FormLabel>Endereço</FormLabel>
                        <Input id='endereco' type='text' placeholder='Digite seu endedeço' { ...register('endereco', { required: true }) } />
                    </FormControl>
                    <FormControl margin="lrem">
                        <FormLabel>idClinica</FormLabel>
                        <Input id='idClinica' type='number' placeholder='Id da clinica' { ...register('idClinica', { required: true }) } />
                    </FormControl>
                    <Button fontSize="sm" alignSelf="flex-end" colorScheme="blue" type='submit'>Enviar</Button>
                </VStack>
            </form>
        </Box>
    )
}

export default CadastroClientes