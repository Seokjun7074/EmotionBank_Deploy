// import * as S from './NicknameStep.style';
import * as S from '@/components/transaction/TransferModal/TransferModal.style';
import { useState } from 'react';
import { nicknameCheck } from '@/apis/user/nicknameCheck';
import { Button } from '@/components/common/Button/Button';
import { useInput } from '@/hooks/useInput';

interface IProps {
  onNext: (nickname: string, isChecked: boolean) => void;
}
const NicknameStep = ({ onNext }: IProps) => {
  const [content, handleContent] = useInput('');
  const [check, setCheck] = useState(false);

  const handleNicknameCheck = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content === '') {
      alert('내용을 입력해주세요.');
      return;
    }
    try {
      const response = await nicknameCheck(content);
      console.log(response);
      if (response.possible) {
        alert('해당 닉네임을 사용할 수 있습니다.');
        setCheck(true);
      } else {
        alert('해당 닉네임이 이미 존재합니다.');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <S.TransferModalWrapper>
      <S.TransferModalTitle>닉네임을 입력해주세요</S.TransferModalTitle>
      <form id="nickname-form" onSubmit={handleNicknameCheck}>
        <S.AmountInput
          style={{ marginBottom: '20px', width: '100%' }}
          type="text"
          name="nickname"
          onChange={handleContent}
          value={content}
        />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <S.SubmitButton type="submit">중복검사</S.SubmitButton>
          <S.SubmitButton onClick={() => onNext(content, check)}>다음</S.SubmitButton>
        </div>
      </form>
    </S.TransferModalWrapper>
  );
  //   <S.NicknameWrapper>
  //     <S.NicknameTitle>닉네임을 입력해주세요</S.NicknameTitle>
  //     <form id="nickname-form" onSubmit={handleNicknameCheck}>
  //       <S.InputWrapper>
  //         <S.StyledInput type="text" name="nickname" onChange={handleContent} value={content} />
  //         <S.StyledButton type="submit">중복검사</S.StyledButton>
  //       </S.InputWrapper>
  //     </form>
  //     <S.NextButton onClick={() => onNext(content, check)}>다음</S.NextButton>
  //   </S.NicknameWrapper>
  // );
};

export default NicknameStep;
