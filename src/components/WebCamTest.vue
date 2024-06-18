<template>
    <Camera
        @loading="loading"
        @started="started"
        @stopped="stopped"
        @paused="paused"
        @resumed="resumed"
        @camera-change="cameraChange"
        @snapshot="snapshot"
        @error="error"
    ></Camera>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Camera from 'simple-vue-camera';

export default defineComponent({
    components: {
        Camera
    },
    setup() {
        const loading = () => console.log("Camera is loading and will start any second");
        const started = () => console.log("Camera has started");
        const stopped = () => console.log("Camera has stopped");
        const paused = () => console.log("Video feed has paused");
        const resumed = () => console.log("Video feed has resumed");
        const cameraChange = (deviceID: string) => console.log(`Camera has been changed to ${deviceID}`);
        const snapshot = (blob: Blob) => console.log("A snapshot has been taken");
        const error = (error: Error) => console.log("error");

        return {
            loading,
            started,
            stopped,
            paused,
            resumed,
            cameraChange,
            snapshot,
            error
        }
    }
});
</script>

<style scoped>
</style>
