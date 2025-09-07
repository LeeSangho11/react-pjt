import { useFormQuery } from "../queries/useFormQuery";
import FormUI from "./FormUi";

export default function FormPage() {
  const { data, isSuccess } = useFormQuery();

  return (
    <section>
      <h2>폼 연습</h2>
      {data && isSuccess && <FormUI data={data.data} />}
    </section>
  );
}
