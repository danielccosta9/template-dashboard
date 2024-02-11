"use client";
import Axios from "axios";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { toast } from "sonner";
import EditIcon from "@mui/icons-material/Edit";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Input,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { connectApiToPaciente } from "../conect";

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const PaginationTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [paciente, setPaciente] = useState([]);
  const [busca, setBusca] = useState("");

  const apiUrl = connectApiToPaciente();

  useEffect(() => {
    setIsLoading(true);
    Axios.get(`${apiUrl}`).then((response) => {
      setPaciente(response.data);
      setIsLoading(false);
    });
  }, [setIsLoading, setPaciente, apiUrl]);

  const handleDelete = (id) => {
    setIsLoading(true);
    window.confirm("Deseja realmente excluir este paciente?");
    if (window.confirm) {
      Axios.delete(`${apiUrl}/${id}`).then(() => {
        setPaciente(paciente.filter((paciente) => paciente.paciente_id !== id));
        setIsLoading(false);
        toast.success("Paciente excluído com sucesso!");
      });
    }
  };

  const quantidadePaciente = paciente;

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredPaciente = useMemo(() => {
    setIsLoading(true);
    let filteredPaciente = paciente.filter((paciente) => {
      return paciente.paciente_nome.toLowerCase().includes(busca.toLowerCase());
    });
    setIsLoading(false);
    return filteredPaciente;
  }, [paciente, busca]);

  return (
    <>
      {(isLoading && (
        <Box sx={{ width: "100%", mt: "10%", mb: "10%" }}>
          <LinearProgress
            color="secondary"
            sx={{
              backgroundColor: "#182237",
              borderRadius: "10px",
              height: "10px",
            }}
          />
        </Box>
      )) || (
        <Box width="100%" overflow="auto">
          <form>
            <Input
              type="text"
              placeholder="🔍 Buscar paciente por nome"
              value={busca}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px",
                borderRadius: "10px",
                width: "max-content",
                backgroundColor: "#2e374a",
                color: "white",
                "&:hover": {
                  backgroundColor: "#2e374a",
                },
                mt: 2,
                mb: 2,
              }}
              onChange={(e) => setBusca(e.target.value)}
            />
          </form>

          <StyledTable
            sx={{
              minWidth: 650,
              "& .MuiTableCell-head": {
                fontSize: "1rem",
                fontWeight: "bold",
                color: "white",
              },
              "& .MuiTableCell-body": {
                fontSize: "0.875rem",
                color: "white",
                hover: {
                  backgroundColor: "#182237",
                },
              },
              backgroundColor: "#182237",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="left" width={350}>
                  Nome do Paciente
                </TableCell>
                <TableCell align="center" width={120}>
                  CPF
                </TableCell>
                <TableCell align="center" width={120}>
                  Nascimento
                </TableCell>
                <TableCell align="center" width={120}>
                  Telefone
                </TableCell>
                <TableCell align="center" width={120}>
                  Ações
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody
            hover
            sx={
              {
               p: "10px",
              }
            }
            >
              {filteredPaciente
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((paciente, index) => (
                  <TableRow key={index} hover>
                    <TableCell align="left">{paciente.paciente_nome}</TableCell>
                    <TableCell align="center">
                      {paciente.paciente_cpf}
                    </TableCell>
                    <TableCell align="center">
                      {paciente.paciente_nascimento}
                    </TableCell>
                    <TableCell align="center">
                      {paciente.paciente_telefone}
                    </TableCell>
                    <TableCell align="center">
                      <Link href={`/dashboard/pacientes/${paciente.paciente_id}`}>
                        <IconButton>
                          <EditIcon color="primary" />
                        </IconButton>
                      </Link>
                      <Link href={`/dashboard/pacientes/${paciente.paciente_id}`}>
                        <IconButton>
                          <EditCalendarIcon color="warning" />
                        </IconButton>
                      </Link>
                      <IconButton
                        onClick={handleDelete.bind(this, paciente.paciente_id)}
                      >
                        <DeleteSweepIcon color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </StyledTable>

          <TablePagination
            sx={{
              backgroundColor: "#182237",
              color: "white",
            }}
            page={page}
            component="div"
            rowsPerPage={rowsPerPage}
            count={quantidadePaciente.length}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 25, 50, 100]}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      )}
    </>
  );
};

export default PaginationTable;
