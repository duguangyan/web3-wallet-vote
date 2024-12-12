
<script setup>
import { onMounted, ref } from 'vue';
import useWeb3 from '@/hooks/useWeb3.js'

const { web3,voteContract,contractAddress, getAccount } = useWeb3()

// 主持人信息
const host = ref('')
// 获取主持人信息
const getHost = async () => {
    host.value = await voteContract.methods.host().call()
}

// 选民地址
const voterAddress = ref('')

const mandate = async() => {
    console.log('分发票权')
    const arr = eval(voterAddress.value)
    let account = await getAccount()
    voteContract.methods.mandate(arr).send({from: account}).on("receipt", (res) => {
        console.log("选票分发成功",res)
    })
}

onMounted( async() => {
    await getHost()   
})

/**
 *  0xd0b7623302Ae60AF0257307d372F786c65467335
 *  0x32067D5F00c5E60B8525aBc79c0085fb572c7563
 *  0xD922bE805c76eAB8cFCF2639Da81E0F9428c7c1d
 *  0xC5dDB48fd6D99C70C2837dA1926eca6Ed95E86Be
 * 
 *  ["0x32067D5F00c5E60B8525aBc79c0085fb572c7563","0xD922bE805c76eAB8cFCF2639Da81E0F9428c7c1d","0xC5dDB48fd6D99C70C2837dA1926eca6Ed95E86Be"]
 * 
 */

</script>

<template>
    <div class="box1">
        <van-divider>分发票权</van-divider>
        <div class="host">
            <van-space>
                <p class="label"><van-icon name="manager"></van-icon>主持人地址</p>
                <p class="address">{{ host }}</p>
            </van-space>
        </div>
        <div>
            <van-space>
                <p class="label"><van-icon name="friends-o"></van-icon>投票人地址</p>
                <textarea class="votors" v-model="voterAddress"></textarea>
            </van-space>
        </div>
        <div class="btn">
            <van-button block @click="mandate">开始分发选票</van-button>
        </div>
    </div>
  </template>
  
  <style lang="less">
 
  </style>
  