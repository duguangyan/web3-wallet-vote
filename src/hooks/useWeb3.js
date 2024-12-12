
import Web3 from 'web3';
import VoteJson from '@/contract/Vote.json'
const useWeb3 = () => {
    const web3 = new Web3(Web3.givenProvider || 'https://linea-sepolia.infura.io/v3/638355f30f124b0daf4131933304abd0');
    const contractAddress = '0x1986CcC568D2C8630883D1c8D9a5BD4CaCbb934B';
    const voteContract = new web3.eth.Contract(VoteJson.abi, contractAddress);
    const getAccount = async () => {
        const accounts = await web3.eth.requestAccounts();
        return accounts[0];
    }
    return {
        web3,
        voteContract,
        contractAddress,
        getAccount
    }
}

export default useWeb3;