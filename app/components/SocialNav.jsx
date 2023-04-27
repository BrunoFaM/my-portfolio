import Image from "next/image";
import linkedinIco from "../../public/linkedin.svg";
import gitIco from "../../public/git.svg";
import mailIco from "../../public/mail.svg";

function socialNav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Image alt="" src={linkedinIco} width={35} height={35}></Image>
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Image alt="" src={gitIco} width={35} height={35}></Image>
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Image alt="" src={mailIco} width={35} height={35}></Image>    
        </a>
        </li>
      </ul>
    </nav>
  );
}

export default socialNav;
