import { useWallet } from "@meshsdk/react";
import {
  ProjectData,
  dateStringToPosix,
  prepareAddNewProjectTx,
  stringToHex,
} from "@andamiojs/core";
import { andamioConfig } from "../../../andamio/config";
import { ChangeEvent, useState } from "react";
import ErrorModal from "../../modals/ErrorModal";
import SuccessTxModal from "../../modals/SuccessTxModal";

const AddNewProject = (props: { closeModal: () => void }) => {
  const [formData, setFormData] = useState({
    contractToken: "",
    projectHashId: "",
    expirationTime: 0,
    lovelaceAmount: 0,
    projectTokenAmount: 0,
    notionLink: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "projectHashId") {
      // Transform the input value to hexadecimal using stringToHex
      const hexValue = stringToHex(value);

      setFormData({
        ...formData,
        [name]: hexValue, // Update "projectHashId" with the hexadecimal value
      });
    } else if (name === "expirationTime") {
      if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        // Transform the input value to a number using dateStringToPosix
        const posixValue = dateStringToPosix(value);
        setFormData({
          ...formData,
          [name]: posixValue,
        });
      }
    } else if (name === "lovelaceAmount") {
      setFormData({
        ...formData,
        [name]: parseInt(value, 10) * 1000000,
      });
    } else {
      setFormData({
        ...formData,
        [name]: name === "projectTokenAmount" ? parseInt(value, 10) : value,
      });
    }
  };

  let project: ProjectData;
  const [txHash, setTxHash] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { wallet, connected } = useWallet();
  if (connected) {
    const handleClick = async () => {
      const { notionLink, ...project } = formData;
      console.log(JSON.stringify(project, null, 4));
      try {
        let res;
        if (notionLink !== "") {
          console.log('has link')
          const MANAGE_ADD_PROJECT_TX = await prepareAddNewProjectTx(
            wallet,
            andamioConfig,
            project,
            notionLink
          );
          res = await MANAGE_ADD_PROJECT_TX.runTx();
        } else {
          console.log('no link')
          const MANAGE_ADD_PROJECT_TX = await prepareAddNewProjectTx(
            wallet,
            andamioConfig,
            project
          );
          res = await MANAGE_ADD_PROJECT_TX.runTx();
        }
        setTxHash(res);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage(JSON.stringify(error));
        }
      }
    };
    return (
      <>
        {txHash !== "" ? (
          <SuccessTxModal txHash={txHash} closeModal={props.closeModal} />
        ) : null}
        {errorMessage !== "" ? (
          <ErrorModal
            errorMessage={errorMessage}
            closeModal={props.closeModal}
          />
        ) : null}
        <div className="flex flex-col py-10 items-center bg-gradient-br w-max p-24">
          <div className="font-extrabold mb-4 text-xl">
            Enter New Project Details
          </div>
          <div>
            <form>
              <table>
                <tr>
                  <td>Escrow:</td>
                  <td className="p-4">
                    <select
                      name="contractToken"
                      value={formData.contractToken}
                      onChange={handleInputChange}
                      className="bg-slate-700 p-2 rounded-md font-extrabold"
                    >
                      <option value="">Choose One</option>
                      {andamioConfig.config.escrows.map((escrow) => {
                        return (
                          <option
                            key={escrow.contractTokenName}
                            value={
                              andamioConfig.config.projectManagementTokens
                                .contractTokenPolicyID +
                              escrow.contractTokenName
                            }
                          >
                            {escrow.name.toUpperCase()}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Project Title:</td>
                  <td className="p-4">
                    <input
                      type="text"
                      name="projectHashId"
                      onChange={handleInputChange}
                      className="bg-slate-700 p-2 rounded-md font-extrabold"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Expiration Date (YYYY-MM-DD):</td>
                  <td className="p-4">
                    <input
                      type="text"
                      name="expirationTime"
                      onChange={handleInputChange}
                      className="bg-slate-700 p-2 rounded-md font-extrabold"
                    />
                  </td>
                </tr>
                <tr>
                  <td>ADA Amount:</td>
                  <td className="p-4">
                    <input
                      type="number"
                      name="lovelaceAmount"
                      onChange={handleInputChange}
                      className="bg-slate-700 p-2 rounded-md font-extrabold"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Project Token Amount:</td>
                  <td className="p-4">
                    <input
                      type="number"
                      name="projectTokenAmount"
                      onChange={handleInputChange}
                      className="bg-slate-700 p-2 rounded-md font-extrabold"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Notion Link optional:</td>
                  <td className="p-4">
                    <input
                      type="text"
                      name="notionLink"
                      onChange={handleInputChange}
                      className="bg-slate-700 p-2 rounded-md font-extrabold"
                    />
                  </td>
                </tr>
              </table>
            </form>
          </div>
          <button
            onClick={handleClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-fit mt-6"
            type="button"
          >
            Confirm Add Project
          </button>
          <div>
            <div className="font-bold mb-2">Set Values</div>
            <table>
              <tr>
                <td>contractToken:</td>
                <td className="px-4">{formData.contractToken.slice(56)}</td>
              </tr>
              <tr>
                <td>projectHashId (hex):</td>
                <td className="px-4">{formData.projectHashId}</td>
              </tr>
              <tr>
                <td>expirationTime (poxis):</td>
                <td className="px-4">{formData.expirationTime}</td>
              </tr>
              <tr>
                <td>lovelaceAmount:</td>
                <td className="px-4">{formData.lovelaceAmount}</td>
              </tr>
              <tr>
                <td>projectTokenAmount:</td>
                <td className="px-4">{formData.projectTokenAmount}</td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  }
  return <>Wallet not connected</>;
};

export default AddNewProject;
