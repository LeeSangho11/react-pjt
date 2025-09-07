import styles from "@/app/styles/FormUI.module.css";
import type { FormValues } from "../types/type";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

type PropsType = {
  data: FormValues;
};

export default function FormUI({ data }: PropsType) {
  console.log("FormUidata >>", { ...data });

  const { register, reset } = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      age: 0,
      gender: "",
      interests: [],
      country: "",
      bio: "",
      date: "",
      satisfaction: 5,
    },
  });

  useEffect(() => {
    if (data) {
      reset({ ...data });
    }
  }, [data, reset]);

  return (
    <form className={styles.form}>
      {/* 1. 텍스트 입력 */}
      <label>
        사용자명
        <input
          type="text"
          placeholder="이름을 입력하세요"
          {...register("username")}
        />
      </label>
      {/* 2. 이메일 */}
      <label>
        이메일
        <input
          type="email"
          placeholder="example@email.com"
          {...register("email")}
        />
      </label>
      3. 비밀번호
      <label>
        비밀번호
        <input type="password" placeholder="******" {...register("password")} />
      </label>
      {/* 4. 숫자 입력 */}
      <label>
        나이
        <input type="number" placeholder="0" {...register("age")} />
      </label>
      {/* 5. 라디오 */}
      <fieldset>
        <legend>성별</legend>
        <label>
          <input type="radio" value="male" {...register("gender")} /> 남성
        </label>
        <label>
          <input type="radio" value="female" {...register("gender")} /> 여성
        </label>
      </fieldset>
      {/* 6. 체크박스 */}
      <fieldset>
        <legend>관심사</legend>
        <label>
          <input type="checkbox" value="coding" {...register("interests")} />{" "}
          코딩
        </label>
        <label>
          <input type="checkbox" value="music" {...register("interests")} />{" "}
          음악
        </label>
        <label>
          <input type="checkbox" value="travel" {...register("interests")} />{" "}
          여행
        </label>
      </fieldset>
      {/* 7. 셀렉트박스 */}
      <label>
        국가
        <select {...register("country")}>
          <option value="">선택하세요</option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="jp">일본</option>
        </select>
      </label>
      {/* 8. 텍스트에어리어 */}
      <label>
        자기소개
        <textarea
          rows={4}
          placeholder="자유롭게 입력하세요"
          {...register("bio")}
        />
      </label>
      {/* 9. 날짜 */}
      <label>
        날짜 선택
        <input type="date" {...register("date")} />
      </label>
      {/* 10. 슬라이더 */}
      <label>
        만족도
        <input
          type="range"
          min="0"
          max="10"
          step="1"
          {...register("satisfaction")}
        />
      </label>
      <button type="submit" className={styles.btn}>
        제출하기
      </button>
    </form>
  );
}
