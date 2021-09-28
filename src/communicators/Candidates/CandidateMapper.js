import { Candidate } from '../../entities/Candidate';


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
        return obj.avatar;
      } else {
        validationCounter++;
        return null;
      }
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
