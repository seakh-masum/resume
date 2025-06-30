import { useEffect, useState } from "react";
import { firebaseDataMapping, firebaseQuery } from "../../helper/GlobalService";
import { onSnapshot } from "firebase/firestore";
import useModal from "../../hooks/useModal";
import SkillDetails from "../dialogs/SkillDetails";
import { RoundedProgressbar } from "../ui/RoundedProgressbar";

export const SkillList = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { setDialog } = useModal();

  useEffect(() => {
    const data = Array(12).fill(0);
    setSkills(data);
    getSkills();
  }, []);

  const getSkills = () => {
    const q = firebaseQuery("skills");
    onSnapshot(q, (querySnapshot) => {
      setSkills(firebaseDataMapping(querySnapshot));
    });
    setLoading(false);
  };

  const onSkillDetails = (e, data) => {
    setDialog(<SkillDetails data={data} />);
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
      {skills?.map((item, index) => (
        <RoundedProgressbar
          key={index}
          data={item}
          isLoading={isLoading}
          onDetails={(e) => onSkillDetails(e, item)}
        />
      ))}
    </div>
  );
};
