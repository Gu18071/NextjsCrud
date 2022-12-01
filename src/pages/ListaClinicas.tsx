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
}

const ListaClinicas: NextPage = () => {

  const router = useRouter()
  const [clinicas, setClinicas] = useState<any[]>([]);
  

  useEffect(() => {
    const fetchData = async () => {

      const result = await api.get('/Clinica')
      console.log(result.data) 
      setClinicas(result.data)
    }
    fetchData();

  }, []);

  function deleteClinica (id :number) {
         axios.delete(`https://localhost:7088/api/Clinica/${id}`)

         setClinicas(clinicas.filter(clinica => clinica.id !== id))
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
        <Text color="light" fontSize='3xl'  textAlign="center" justifyContent="center" fontFamily="Open Sans" marginRight="19rem">Lista de clínicas</Text>
        </Box>
        <Spacer />
        <Box>
        <Button fontSize="sm"   colorScheme="teal" marginRight="1rem" onClick={() => router.push('../')}>Ver clientes</Button>
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
            <Thead bgColor="green.500">
              <Tr>
                <Th textColor="white">Id</Th>
                <Th textColor="white">Nome</Th>
                <Th textColor="white">Email</Th>
                <Th textColor="white">Acões</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                clinicas.map((clinica: ClienteAPI, id) => (
                  <Tr key={id}>
                    <Td>{clinica.id}</Td>
                    <Td>{clinica.nome}</Td>
                    <Td>{clinica.email}</Td>
                    <Td>
                      <Flex justifyContent="space-between">
                        <Button size="sm"  fontSize="smaller" colorScheme="yellow" mr="2" onClick={() => router.push(`../EditClinicas/${clinica.id}`)}>Editar</Button>
                        <Button size="sm" fontSize="smaller" colorScheme="red"  onClick={() => deleteClinica(clinica.id)}>Excluir</Button>
                        <Button size="sm" fontSize="smaller" colorScheme="blue" onClick={() => router.push(`../DadosClinicas/${clinica.id}`)}><FaEye /></Button>
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
export default ListaClinicas