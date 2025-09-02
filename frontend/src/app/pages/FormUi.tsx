import styles from "@/app/styles/FormUI.module.css";

export default function FormUI() {
  return (
    <form className={styles.form}>
      {/* 1. 텍스트 입력 */}
      <label>
        사용자명
        <input type="text" placeholder="이름을 입력하세요" />
      </label>

      {/* 2. 이메일 */}
      <label>
        이메일
        <input type="email" placeholder="example@email.com" />
      </label>

      {/* 3. 비밀번호 */}
      <label>
        비밀번호
        <input type="password" placeholder="******" />
      </label>

      {/* 4. 숫자 입력 */}
      <label>
        나이
        <input type="number" placeholder="0" />
      </label>

      {/* 5. 라디오 */}
      <fieldset>
        <legend>성별</legend>
        <label>
          <input type="radio" name="gender" value="male" /> 남성
        </label>
        <label>
          <input type="radio" name="gender" value="female" /> 여성
        </label>
      </fieldset>

      {/* 6. 체크박스 */}
      <fieldset>
        <legend>관심사</legend>
        <label>
          <input type="checkbox" value="coding" /> 코딩
        </label>
        <label>
          <input type="checkbox" value="music" /> 음악
        </label>
        <label>
          <input type="checkbox" value="travel" /> 여행
        </label>
      </fieldset>

      {/* 7. 셀렉트박스 */}
      <label>
        국가
        <select>
          <option value="">선택하세요</option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="jp">일본</option>
        </select>
      </label>

      {/* 8. 텍스트에어리어 */}
      <label>
        자기소개
        <textarea rows={4} placeholder="자유롭게 입력하세요" />
      </label>

      {/* 9. 날짜 */}
      <label>
        날짜 선택
        <input type="date" />
      </label>

      {/* 10. 슬라이더 */}
      <label>
        만족도
        <input type="range" min="0" max="10" step="1" />
      </label>

      <button type="submit" className={styles.btn}>
        제출하기
      </button>
    </form>
  );
}
