
<script setup>
import { onMounted, ref } from "vue";
import useWeb3 from '@/hooks/useWeb3.js'

const { web3,voteContract,contractAddress, getAccount } = useWeb3()
// 当前账户地址
const account = ref("")
// 受托人地址
const delegatorAddress = ref("")
// 选民信息
const voteInfo = ref({
    amount: "",
    delegator: "",
    isVoted: "",
    targetId: "",
})
const getVoteInfo = async () => {
    account.value = await getAccount();
    voteInfo.value = await voteContract.methods.voters(account.value).call()
}

// 发起委托
const delegate = async () => {
    await voteContract.methods.delegate(delegatorAddress.value).send({ from: account.value })
}

onMounted( async () => {
    await getVoteInfo()

    console.log(getVoteInfo,"===========")
})


</script>
<template>
    <div class="box2">
        <van-divider>账户信息</van-divider>
        <van-space>
            <p class="label">当前账户</p>
            <p class="address">{{ account }}</p>
        </van-space>
        <br />
        <van-space>
            <p class="label">账户票数</p>
            <p class="address">{{ voteInfo.amount }}</p>
        </van-space>
        <br />
        <van-space>
            <p class="label">委托账户</p>
            <p class="address">{{ voteInfo.delegator }}</p>
        </van-space>
        <br />
        <van-space>
            <p class="label">是否已投票</p>
            <p class="address">{{ voteInfo.isVoted }}</p>
        </van-space>
        <br />
        <van-space>
            <p class="label">投票ID</p>
            <p class="address">{{ voteInfo.targetId }}</p>
        </van-space>

        <br />
        <div class="btn">
            <van-cell-group inset>
                <van-field label="委托人地址" v-model="delegatorAddress" placeholder="请输入委托人地址" />
            </van-cell-group>

            <van-button block @click="delegate">委托他人代投</van-button>
        </div>
    </div>
  </template>
  

  
  <style lang="less">
 
  </style>
  