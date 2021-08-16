import copyImg from 'assets/images/copy.svg';

import { useToast } from 'hooks/useToast';

import './style.scss';

type RoomCodeProps = {
  code: string;
};

export function copyToClipboard(code: string) {
  navigator.clipboard.writeText(code);
}

export function RoomCode(props: RoomCodeProps) {
  const { showToast } = useToast();

  function copyRoomCodeToClipboard() {
    copyToClipboard(props.code);
    showToast('✅', `Código da sala copiado!`);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #-Me7z8SBf8wpemElQt9b</span>
    </button>
  );
}
