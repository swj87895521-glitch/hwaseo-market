'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { validateCouponRegistration } from '@/mocks/coupon';

export function CouponRegisterForm() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = validateCouponRegistration(code);

    if (result.ok) {
      setError('');
      setIsRegistered(true);
      return;
    }

    setIsRegistered(false);
    setError(result.error);
  };

  return (
    <div className="coupon-register">
      <form className="coupon-register__form" onSubmit={handleSubmit}>
        <label className="coupon-register__label" htmlFor="coupon-code">영수증 하단의 코드를 입력해주세요</label>
        <div className="coupon-register__row">
          <input id="coupon-code" name="coupon-code" value={code} onChange={(event) => setCode(event.target.value)} placeholder="예: MARKET-2026-04" />
          <button type="submit">등록</button>
        </div>
      </form>
      {isRegistered ? <div className="coupon-register__feedback is-success"><p>쿠폰이 등록되었어요. 내 쿠폰함에서 바로 확인해보세요.</p><Button href="/mypage">마이페이지로 이동</Button></div> : null}
      {error ? <p className="coupon-register__feedback is-error">{error}</p> : null}
    </div>
  );
}