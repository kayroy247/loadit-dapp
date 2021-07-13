import Web3 from 'web3';
let web3
const getWeb3 = () => {
    if(window.ethereum){
     web3 = new Web3(window.ethereum)
    }
    return web3
}

export const getAccount = async () => {
    try{
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log("done", accounts)
    return accounts[0]

    } catch(error) {
        console.log("Connection Rejected!", error)
    }

}