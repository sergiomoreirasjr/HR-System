import React, { useState } from "react";
import {
  departmentOptions,
  genderOptions,
  managerOptions,
  titleOptions,
  seniorityOptions,
  userTypeOptions,
} from "../staticData/selectOptions";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    documentNumber: "",
    emailPersonal: "",
    phoneNumber: "",
    gender: "",
    userType: "",
    title: "",
    seniorityLevel: "",
    department: "",
    manager: "",
    loginActivationTime: "",
    loginExpirationTime: "",
    // userStatus: "", Só será alterado na tela de UpdateUser, criação definirá esse atributo fixamente como Ativo.
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicionar lógica de enviar aqui
  };

  return (
    <div className="container">
      <h2>Cadastro de Usuários</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Nome completo do novo funcionário."
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="documentNumber"
          placeholder="CPF do novo funcionário."
          value={formData.documentNumber}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="emailPersonal"
          placeholder="e-Mail pessoal do novo funcionário."
          value={formData.emailPersonal}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Número de telefone do novo funcionário."
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          placeholder="Gênero do novo funcionário."
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>
            Gênero
          </option>
          {genderOptions.map((genderOption) => (
            <option key={genderOption.value} value={genderOption.value}>
              {genderOption.label}
            </option>
          ))}
        </select>
        <select
          name="userType"
          placeholder="Tipo do usuário que será criado para o novo funcionário."
          value={formData.userType}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>
            Tipo do Usuário
          </option>
          {userTypeOptions.map((userTypeOption) => (
            <option key={userTypeOption.value} value={userTypeOption.value}>
              {userTypeOption.label}
            </option>
          ))}
        </select>
        <select
          name="title"
          placeholder="Cargo do novo funcionário."
          value={formData.title}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>
            Cargo do Usuário
          </option>
          {titleOptions.map((titleOption) => (
            <option key={titleOption.value} value={titleOption.value}>
              {titleOption.label}
            </option>
          ))}
        </select>
        <select
          name="seniorityLevel"
          placeholder="Senioridade do cargo do novo funcionário."
          value={formData.seniorityLevel}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>
            Senioridade do Usuário
          </option>
          {seniorityOptions.map((seniorityOption) => (
            <option key={seniorityOption.value} value={seniorityOption.value}>
              {seniorityOption.label}
            </option>
          ))}
        </select>
        <select
          name="department"
          placeholder="Nome do departamento que novo funcionário deve ser associado."
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>
            Departamento
          </option>
          {departmentOptions.map((departmentOption) => (
            <option key={departmentOption.value} value={departmentOption.value}>
              {departmentOption.label}
            </option>
          ))}
        </select>
        <select
          name="manager"
          placeholder="Gerente do novo funcionário."
          value={formData.manager}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>
            Gerente do Usuário
          </option>
          {managerOptions.map((managerOption) => (
            <option key={managerOption.value} value={managerOption.value}>
              {managerOption.label}
            </option>
          ))}
        </select>

        {/* Campo de seleção de data para loginActivationTime */}
        <label htmlFor="loginActivationTime">Data de Contratação:</label>
        <input
          type="date"
          id="loginActivationTime"
          name="loginActivationTime"
          value={formData.loginActivationTime}
          onChange={handleChange}
          required
        />

        {/* Campo de seleção de data para loginExpirationTime */}
        <label htmlFor="loginExpirationTime">Data de Desligamento:</label>
        <input
          type="date"
          id="loginExpirationTime"
          name="loginExpirationTime"
          value={formData.loginExpirationTime}
          onChange={handleChange}
          required
        />

        <button type="submit" className="register">Cadastrar</button>
      </form>
    </div>
  );
};

export default CreateUser;
