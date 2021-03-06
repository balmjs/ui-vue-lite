<template>
  <ul :class="[menuClassName, positionClassName]" :data-mdl-for="dropdownId">
    <slot>
      <ui-menuitem v-for="(item, index) in currentMenu"
        :key="index"
        :item="(getType(item) === 'object') ? item : {}"
        @click="handleItem(item)">
      </ui-menuitem>
    </slot>
  </ul>
</template>

<script>
import mdlMixin from '../../mixins/mdl';
import '../../../material-design-lite/menu/menu';
import '../../../material-design-lite/ripple/ripple';
import getType from '../../helpers/typeof';
import UiMenuitem from './menuitem';

const POSITIONS = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
const POSITION_NONE = 0; // Default
const POSITION_TOP_LEFT = 1; // Positions menu above button, aligns left edge of menu with button
const POSITION_TOP_RIGHT = 2; // Positions menu above button, aligns right edge of menu with button
const POSITION_BOTTOM_LEFT = 3; // Positions menu below button, aligns left edge of menu with button
const POSITION_BOTTOM_RIGHT = 4; // Positions menu below button, aligns right edge of menu with button
const EVENT_SELECTED = 'selected';

export default {
  name: 'ui-menu',
  mixins: [mdlMixin],
  components: {
    UiMenuitem
  },
  props: {
    // state
    menu: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // ui attributes
    dropdownId: {
      type: String,
      required: true
    },
    noRipple: {
      type: Boolean,
      default: false
    },
    position: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      getType,
      currentMenu: this.menu
    };
  },
  computed: {
    menuClassName() {
      return {
        'mdl-menu': true,
        'mdl-js-menu': true,
        'mdl-js-ripple-effect': !this.noRipple,
        'mdl-js-ripple-effect--ignore-events': !this.noRipple // bugfix for ripple
      };
    },
    positionClassName() {
      let currentPositon =
        getType(this.position) === 'string'
          ? POSITIONS.indexOf(this.position) + 1
          : this.position;

      let currentPositonName =
        currentPositon > 0 && currentPositon <= POSITIONS.length
          ? POSITIONS[currentPositon - 1]
          : false;

      let className = currentPositonName
        ? `mdl-menu--${currentPositonName}`
        : '';

      return className;
    }
  },
  watch: {
    menu(val) {
      this.currentMenu = val;
    }
  },
  methods: {
    handleItem(data) {
      if (!data.disabled) {
        this.$emit(EVENT_SELECTED, Object.assign({}, data)); // result: any
      }
    }
  },
  mounted() {
    this.$mdl.upgradeElements(this.$el);
  }
};
</script>
