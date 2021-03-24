<template>
    <div class="loading">
        <div class="loading-box">
            <div class="loadingbox">
                <img src="../assets/images/loading.gif">
            </div>
            <!--<i class="fa fa-spinner fa-pulse fa-3x"></i>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'loading',
        data() {
            return {
                popup: true
            }
        },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .loading {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10000;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0);
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    .loading-box {
        background: none;
        color: #fff;
        position: absolute;
        top: calc(50% - 50px);
        right: 50%;
        margin-top: -18px;
        margin-right: -18px;
    }
    .loading img {
        height: 100px;
        width: 100px;
        box-shadow: 0 1px 6px 4px rgba(175, 175, 175, 0.8);
        border-radius: 10px;
    }
</style>