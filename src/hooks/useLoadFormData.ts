import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { getFormData } from "../apis/form";
import { useDispatch } from "react-redux";
import { resetComponents } from "../store/componentsReducer";

function useLoadFormData() {
  const { id = "1" } = useParams();
  const dispatch = useDispatch();

  const { data, loading, error, run } = useRequest(
    async (id: string) => {
      if (!id) {
        throw new Error("没有表单 id");
      }
      const data = await getFormData(id);
      return data;
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    if (!data) return;
    const { title = "", componentList = [] } = data;
    dispatch(resetComponents({ componentList }));
  }, [data]);

  useEffect(() => {
    run(id);
  }, [id]);
  return { data, loading, error };
}
export default useLoadFormData;
