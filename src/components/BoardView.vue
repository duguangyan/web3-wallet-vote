<script setup>
import { onMounted, ref } from 'vue'

import useWeb3 from '@/hooks/useWeb3.js'

const { web3,voteContract,contractAddress, getAccount } = useWeb3()

let board = ref([])

// 获取看板列表
const getBoardInfo = async () => {
    board.value = await voteContract.methods.getBoardInfo().call() || []
}

// 投票
const vote = async (i) => {
    let account = await getAccount()

    let voteInfo = await voteContract.methods.voters(account).call()
    console.log(voteInfo,'--------------------')
    if(voteInfo.isVoted) {
        alert('您已经投过票了')
        return
    }
    await voteContract.methods.vote(i).send({from: account}) || []

}
const initEventListen = () => {
    voteContract.events.voteSuccess({fromBlock: 2},(err, event)=>{
        console.log("监听执行了...",err, event)
    }).on("data",async (event)=>{
        console.log("智能合约出发的事件...", event)
        await getBoardInfo()
    })
}

onMounted( async ()=>{
    await getBoardInfo()
    initEventListen()
})
</script>

<template>
    <div class="box3">
        <van-divider>投票看板</van-divider>
        <van-cell :title="b.name" icon="shop-o" v-for="(b,i) in board" :key="i">
            <template #right-icon>
                <van-button @click="vote(i)">{{ b.totalAmount }}</van-button>
            </template>
        </van-cell>
    </div>
</template>


<style lang="less">

</style>
