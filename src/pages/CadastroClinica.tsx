import type { NextPage } from 'next'
import { Button, Spacer } from '@chakra-ui/react'
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
import { useForm } from 'react-hook-form'
import api from '../services/api'
import { useRouter } from 'next/router'

interface UserFrontInfo {
    nome: string,
    email: string,
    senha: number,
}

const CadastroClinica: NextPage = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data: any) => {
        const request = await api.post('/Clinica', data)
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
                <Text color="light" fontSize='3xl' fontFamily="Open Sans"  justifyContent="center" textAlign="center">Cadastro de Clinicas</Text>
                </Box>
                <Spacer />
                <Box>
                <ColorModeSwitcher />
                </Box>
            </Flex>
            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack marginY="0.5rem">
                    <FormControl margin="lrem">
                        <FormLabel>Nome</FormLabel>
                        <Input id='nome' type='text' placeholder='Digite o nome da clinica' { ...register('nome', { required: true }) } />
                    </FormControl>
                    <FormControl margin="lrem">
                        <FormLabel>Email</FormLabel>
                        <Input id='email' type='text' placeholder='Digite o email' { ...register('email', { required: true })} />
                    </FormControl>
                    <FormControl margin="lrem">
                        <FormLabel>Senha</FormLabel>
                        <Input id='senha' type='number' placeholder='Digite sua senha' { ...register('senha', { required: true }) } />
                    </FormControl>
                    <Button fontSize="sm" alignSelf="flex-end" colorScheme="blue" type='submit'>Enviar</Button>
                </VStack>
            </form>
        </Box>
    )
}

export default CadastroClinica