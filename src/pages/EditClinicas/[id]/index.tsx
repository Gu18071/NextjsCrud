import { Button, HStack, Spacer } from '@chakra-ui/react'
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
import { useForm} from 'react-hook-form'
import api from '../../../services/api'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'


const UpdateClinicas = () => {
    
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
                <Button fontSize="sm" alignSelf="flex-end" colorScheme="teal" onClick={() => router.push('/')} >Voltar</Button>
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
        <HStack marginY="0.5rem">
            <FormControl margin="lrem">
                <FormLabel>Nome</FormLabel>
                <Input id='nome' type='text' placeholder='Nome da clinica' { ...register('nome', { required: true }) } />
            </FormControl>
            <FormControl margin="lrem">
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input id='email' type='email' placeholder='Digite o seu Email' { ...register('email', { required: true })} />
            </FormControl>
        </HStack>
        <VStack>
            <Button fontSize="sm" alignSelf="flex-end" colorScheme="blue" type='submit' onClick={() => router.push('/ListaClinicas')}>Atualizar</Button>
        </VStack>
    </form>
</Box>
    </>
  )
}

export default UpdateClinicas

