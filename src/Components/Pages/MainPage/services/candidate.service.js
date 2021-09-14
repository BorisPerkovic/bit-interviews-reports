import { Candidate } from "../../../../entities/Candidate";

class CandidateService {
  constructor() {}

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
      return "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png";
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
    return arr.filter(item => item.name);
  }
  
}

export const candidateService = new CandidateService();
