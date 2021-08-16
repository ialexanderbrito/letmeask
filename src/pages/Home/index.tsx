import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import googleIconImg from '../../assets/images/google-icon.svg';
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import userIconImg from '../../assets/images/user-icon.svg';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import { database } from '../../services/firebase';

import './style.scss';

export function Home() {
  const history = useHistory();

  const { signInWithGoogle, user, signOut } = useAuth();
  const { showToast } = useToast();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }

  async function handleToContinueWith() {
    history.push('/rooms/new');
  }

  async function handleSignOut() {
    await signOut();
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      showToast('⚠️', 'Sala não encontrada');
      return;
    }

    if (roomRef.val().endedAt) {
      showToast('⚠️', 'Essa sala já terminou.');
    }

    history.push(`/`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          {user ? (
            <>
              <button onClick={handleToContinueWith} className="btn-continue">
                <img src={user.avatar} alt={user.name} />
                <div>
                  <p>{user.name}</p>
                  <small>{user.email}</small>
                </div>
              </button>

              <button
                onClick={handleSignOut}
                className="btn-continue btn-continue--another"
              >
                <img src={userIconImg} alt="Icone usuário" />
                <div>
                  <p>Usar outra conta</p>
                </div>
              </button>
            </>
          ) : (
            <button onClick={handleCreateRoom} className="create-room">
              <img src={googleIconImg} alt="Logo do Google" />
              Crie sua sala com o Google
            </button>
          )}
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
