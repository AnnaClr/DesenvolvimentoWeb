import { Container } from "./style"
import axios from "axios"
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table'
import { BsSearch } from "react-icons/bs"
import { BiEdit } from "react-icons/bi"
import Modal from 'react-bootstrap/Modal';
import { FormUpdate } from "../FormUpdate"

export function HandleStudents() {
    const [listStudents, setListStudents] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [studentData, setStudentData] = useState([])

    const modalOpen = (studentID) => {
        setShowModal(true)
        const student = listStudents.findIndex(student => student.ID == studentID)
        setStudentData(listStudents[student]);
    }
    console.log(studentData);
    const modalClose = () => setShowModal(false)

    // function modalOpen() {
    //     setShowModal(true)
    // }
    // function modalClose() {
    //     setShowModal(false)
    // }

    const API = "http://localhost:3000/students"
    function fetchStudents() {
        axios.get(API)
        .then((res) => setListStudents(res.data))
        .catch((error) => alert(error))
    }

    useEffect(() => {
        fetchStudents()
    }, [])

    console.log(listStudents);
    return (
        <Container>
            <article>
                <section className="titleSearch">
                <h1>Alunos</h1>
                <div className="inputSection">
                    <input 
                    id="inputSearchStudent"
                    type="text"
                    placeholder=" "
                    />

                    <label 
                    htmlFor="inputSearchStudent" 
                    className="labelInputSearch"
                    >Buscar aluno
                    </label>
                    <BsSearch className="searchIcon"/>
                </div>
                </section>

                <section className="tableStudents">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Celular</th>
                        <th>Cidade</th>
                        <th>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listStudents && 
                            listStudents.map((students, index) => {
                            return (
                                <tr key={index}>
                                    <td>{students.ID}</td>
                                    <td>{students.Nome}</td>
                                    <td>{students.Celular}</td>
                                    <td>{students.Cidade}</td>
                                    <td>
                                        <BiEdit className="editIcon" onClick={() => modalOpen(students.ID)}/>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>
                </section>

                <section>
                <Modal show={showModal} onHide={modalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Aluno</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormUpdate modalClose={modalClose} studentData={studentData}/>
                    </Modal.Body>
                    
                </Modal>
                </section>
            </article>
        </Container>
    )
}