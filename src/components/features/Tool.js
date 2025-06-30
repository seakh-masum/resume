import { useEffect, useState } from "react";
import { firebaseDataMapping, firebaseQuery } from "../../helper/GlobalService";
import { onSnapshot } from "firebase/firestore";
import useModal from "../../hooks/useModal";
import SkillDetails from "../dialogs/SkillDetails";
import { RoundedProgressbar } from "../ui/RoundedProgressbar";

export const ToolList = () => {
  const [tools, setTools] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { setDialog } = useModal();

  useEffect(() => {
    const data = Array(12).fill(0);
    setTools(data);
    getTools();
  }, []);

  const getTools = () => {
    const q = firebaseQuery("tools");
    onSnapshot(q, (querySnapshot) => {
      setTools(firebaseDataMapping(querySnapshot));
    });
    setLoading(false);
  };

  const onToolDetails = (e, data) => {
    setDialog(<SkillDetails data={data} />);
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
      {tools?.map((item, index) => (
        <RoundedProgressbar
          key={index}
          data={item}
          isLoading={isLoading}
          onDetails={(e) => onToolDetails(e, item)}
        />
      ))}
    </div>
  );
};
