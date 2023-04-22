<template>
  <p>dddd</p>
  <a-avatar-group>
    <a-avatar style="background-color: #f56a00">K</a-avatar>
    <a-tooltip title="Ant User" placement="top">
      <a-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </a-tooltip>
    <a-avatar style="background-color: #1890ff">
      <template #icon><UserOutlined /></template>
    </a-avatar>
  </a-avatar-group>
  <a-divider />
  <a-avatar-group
    :max-count="2"
    :max-style="{ color: '#f56a00', backgroundColor: '#fde3cf' }"
  >
    <a-avatar style="background-color: #1890ff">K</a-avatar>
    <a-tooltip title="Ant User" placement="top">
      <a-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </a-tooltip>
    <a-avatar style="background-color: #1890ff">
      <template #icon><UserOutlined /></template>
    </a-avatar>
  </a-avatar-group>
  <a-divider />
  <a-avatar-group
    :max-count="2"
    size="large"
    :max-style="{
      color: '#f56a00',
      backgroundColor: '#fde3cf',
    }"
  >
    <a-avatar style="background-color: #1890ff">K</a-avatar>
    <a-tooltip title="Ant User" placement="top">
      <a-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </a-tooltip>
    <a-avatar style="background-color: #1890ff">
      <template #icon><UserOutlined /></template>
    </a-avatar>
  </a-avatar-group>
</template>

<script lang="ts"></script>
