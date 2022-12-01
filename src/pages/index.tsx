import { Button, Spacer } from '@chakra-ui/react'
import { FaEye } from "react-icons/fa";
import {
  Text,
  Flex,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ColorModeSwitcher } from '../Components/ColorModeSwitcher'
import api from '../services/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import React from 'react';

interface ClienteAPI {
  id: number,
  nome: string,
  email: string,
  cpf: number,
  telefone: number,
  endereco: string,
  clinicaId:number,
}

const Home: NextPage = () => {

  const router = useRouter()
  const [clientes, setClientes] = useState<any[]>([]);
  

  useEffect(() => {
    const fetchData = async () => {

      const result = await api.get('/Cliente')
      console.log(result.data) 
      setClientes(result.data)
    }
    fetchData();

  }, []);

  function deleteCliente (id :number) {
         axios.delete(`https://localhost:7088/api/Cliente/${id}`)

         setClientes(clientes.filter(cliente => cliente.id !== id))
  };

  return (
    <Box margin="8">
      <Flex  margin="auto" paddingBottom="6">
      <Box>
        <Button fontSize="sm"   colorScheme="teal"  onClick={() => router.push('../CadastroClientes')}>Cadastro de cliente</Button>
        </Box>
        <Box>
        <Button fontSize="sm" marginLeft="1rem" colorScheme="teal"  onClick={() => router.push('../CadastroClinica')}>Cadastro de clínica</Button>
        </Box>
        <Spacer />
        <Box>
        <Text color="light" fontSize='3xl'  textAlign="center" justifyContent="center" fontFamily="Open Sans" marginRight="19rem">Lista de clientes</Text>
        </Box>
        <Spacer />
        <Box>
        <Button fontSize="sm"   colorScheme="teal" marginRight="1rem"  onClick={() => router.push('../')}>Ver clientes</Button>
        </Box>
        <Box>
        <Button fontSize="sm"   colorScheme="teal"  onClick={() => router.push('../ListaClinicas')}>Ver clínicas</Button>
        </Box>
        <Box>
        <ColorModeSwitcher />
        </Box>
      </Flex>
      <TableContainer  minWidth="60rem"  maxWidth="100rem">
        <Flex>
          <Table variant="simple">
            <Thead bgColor="blue.500">
              <Tr>
              <Th textColor="white">Id</Th>
              <Th textColor="white">Id da clínica</Th>
                <Th textColor="white">Nome</Th>
                <Th textColor="white">Email</Th>
                <Th textColor="white">CPF</Th>
                <Th textColor="white">Telefone</Th>
                <Th textColor="white">Endereço</Th>
                <Th textColor="white">Acões</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                clientes.map((cliente: ClienteAPI, id) => (
                  <Tr key={id}>
                    <Td>{cliente.id}</Td>
                    <Td>{cliente.clinicaId}</Td>
                    <Td>{cliente.nome}</Td>
                    <Td>{cliente.email}</Td>
                    <Td>{cliente.cpf}</Td>
                    <Td>{cliente.telefone}</Td>
                    <Td>{cliente.endereco}</Td>
                    <Td>
                      <Flex justifyContent="space-between">
                        <Button size="sm"  fontSize="smaller" colorScheme="yellow" mr="2" onClick={() => router.push(`../EditClientes/${cliente.id}`)}>Editar</Button>
                        <Button size="sm" fontSize="smaller" colorScheme="red"  onClick={() => deleteCliente(cliente.id)}>Excluir</Button>
                        <Button size="sm" fontSize="smaller" colorScheme="blue" onClick={() => router.push(`../DadosClientes/${cliente.id}`)}><FaEye /></Button>
                      </Flex>
                    </Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
        </Flex>
        </TableContainer>
    </Box>

  )
}
export default Home