import React, { useState } from 'react';

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [participouAnteriormente, setParticipouAnteriormente] = useState(false);
  const [anosParticipacaoAnteriores, setAnosParticipacaoAnteriores] = useState('');
  const [foto, setFoto] = useState<File | null>(null);

  const handleParticipouAnteriormenteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParticipouAnteriormente(e.target.value === 'Sim');
  };

  const handleAnosParticipacaoAnterioresChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnosParticipacaoAnteriores(e.target.value);
  };

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFoto(files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar dados do formulário
    // ...

    // Resetar o formulário após o envio
    setNome('');
    setEmail('');
    setTelefone('');
    setParticipouAnteriormente(false);
    setAnosParticipacaoAnteriores('');
    setFoto(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome Completo:</label>
        <input type="text" placeholder="Insira o seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>

      <div>
        <label>E-mail:</label>
        <input type="email" placeholder="Insira o seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div>
        <label>Telefone para contato:</label>
        <input
          type="tel"
          placeholder="(99) 99999-9999"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>

      <div>
        <p>Já participou de edições anteriores?</p>
        <label>
          <input
            type="radio"
            value="Não"
            checked={!participouAnteriormente}
            onChange={handleParticipouAnteriormenteChange}
          />
          Não
        </label>
        <label>
          <input type="radio" value="Sim" checked={participouAnteriormente} onChange={handleParticipouAnteriormenteChange} />
          Sim
        </label>
        {participouAnteriormente && (
          <input
            type="text"
            placeholder="Insira os anos que tenha participado (ex: 2018, 2019)"
            value={anosParticipacaoAnteriores}
            onChange={handleAnosParticipacaoAnterioresChange}
          />
        )}
      </div>

      <div>
        <label>Deseja trabalhar na produção do nosso bloco?</label>
        <select value={anosParticipacaoAnteriores} onChange={(e) => setAnosParticipacaoAnteriores(e.target.value)}>
          <option value="Não tenho interesse">Não tenho interesse</option>
          <option value="Sim, quero ser um colaborador">Sim, quero ser um colaborador</option>
        </select>
      </div>

      <div>
        <label>Compartilhe uma foto memorável da concentração do nosso bloco de carnaval.</label>
        <p>Faça o upload de uma foto da concentração que represente a alegria e a atmosfera festiva do nosso bloco, independentemente do ano em que tenha sido tirada. Sua foto pode ser usada em nosso mural e para material de divulgação. Arraste o arquivo para fazer upload</p>
        <input type="file" onChange={handleFotoChange} />
      </div>

      <button type="submit">Finalizar Cadastro</button>
    </form>
  );
};

export default Cadastro;
