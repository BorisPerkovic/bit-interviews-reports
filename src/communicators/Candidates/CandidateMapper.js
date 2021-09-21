import { Candidate } from "../../entities/Candidate";
import placeholderImg from "../../assets/user-placeholder.png";

class CandidateMapper {

  createCandidate(obj) {
    let validationCounter = 0;

    const getCandidateName = () => {
      if (obj.name) {
        return obj.name;
      } else {
        validationCounter++;
        return null;
      }
    };

    const getCandidateId = () => {
      if (obj.id) {
        return obj.id;
      } else {
        validationCounter++;
        return null;
      }
    };

    const getCandidateImg = () => {
      if (obj.avatar) {
        return `https://randomuser.me/api/portraits/men/${Math.floor(
          Math.random() * 80
        )}.jpg`;
      }
      return placeholderImg;
    };

    const candidateEmail = obj.email.toLowerCase() || "no email address";

    const candidateDate = obj.birthday || "birthday unknown";

    const candidateEducation = obj.education || "education unknown";

    if (validationCounter === 0) {
      return new Candidate(
        getCandidateId(obj.id),
        getCandidateName(obj.name),
        getCandidateImg(),
        candidateEmail,
        candidateDate,
        candidateEducation
      );
    }
  }

  filterCandidate(arr) {
    return arr.filter((item) => item.name);
  }
}

export const candidateMapper = new CandidateMapper();
