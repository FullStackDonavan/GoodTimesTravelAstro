<script>
import MenuContainer from "../../components/containers/MenuContainer.vue";
import MobileMenuButton from "../menu/MobileMenuButton.vue";
import ClickableLogo from "../menu/ClickableLogo.vue";
import MenuList from "../menu/MenuList.vue";
import IconList from "../menu/IconList.vue";
import MobileMenuContainer from "../containers/MobileMenuContainer.vue";
export default {
  name: "Navbar",
  components: {
    MenuContainer,
    MobileMenuButton,
    ClickableLogo,
    MenuList,
    IconList,
    MobileMenuContainer,
  },
};
</script>

<template>
  <MenuContainer>
    <MobileMenuContainer
      ><ClickableLogo />
      <MobileMenuButton />
    </MobileMenuContainer>
    <MenuList />
    <IconList />
  </MenuContainer>
</template>
