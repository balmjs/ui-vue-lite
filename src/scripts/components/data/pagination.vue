<template>
  <div v-if="recordCount" :class="className">
    <div v-if="showRecord && !mini" class="mdl-pagination--record">
      <slot
        :recordCount="recordCount"
        :pageSize="pageSize"
        :pageCount="pageCount"
      ></slot>
    </div>
    <div class="mdl-pagination--paging">
      <a class="mdl-pagination--paging-previous">
        <span
          v-html="currentPrev"
          @click="handleClick(currentPage === 1 ? 1 : currentPage - 1)"
        ></span>
      </a>
      <template v-for="(page, index) in pageCount">
        <a
          v-if="!mini && isShow(page)"
          :key="index"
          :class="{ active: page === currentPage }"
        >
          <span v-if="showPage(page)" @click="handleClick(page)">{{
            page
          }}</span>
          <span v-else class="ellipsis">...</span>
        </a>
      </template>
      <template v-if="mini && !showRecord">
        <slot></slot>
      </template>
      <a class="mdl-pagination--paging-next">
        <span
          v-html="currentNext"
          @click="
            handleClick(currentPage === pageCount ? pageCount : currentPage + 1)
          "
        ></span>
      </a>
      <div v-if="!mini && showJumper" class="mdl-pagination--jumper">
        <span>{{ jumperBefore }}</span>
        <input
          type="number"
          min="1"
          :max="pageCount"
          v-model="pager"
          @keydown.prevent.enter="handleClick($event.target.value)"
        />
        <span>{{ jumperAfter }}</span>
        <ui-button v-if="jumperButton" @click="handleClick(pager)">{{
          jumperButton
        }}</ui-button>
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from '../common/button';

const DOUBLE_ARROW_LEFT = '&laquo;';
const DOUBLE_ARROW_RIGHT = '&raquo;';
const SINGLE_ARROW_LEFT = '&lsaquo;';
const SINGLE_ARROW_RIGHT = '&rsaquo;';
const POSITION_LEFT = 'left';
const POSITION_RIGHT = 'right';
const EVENT_CHANGE = 'change';

export default {
  name: 'ui-pagination',
  components: {
    UiButton
  },
  model: {
    prop: 'page',
    event: EVENT_CHANGE
  },
  props: {
    // state
    page: {
      type: Number,
      default: 1
    },
    // ui attributes
    recordCount: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      required: true
    },
    prev: {
      type: String,
      default: ''
    },
    next: {
      type: String,
      default: ''
    },
    pageSpan: {
      type: Number,
      default: 3
    },
    showRecord: {
      type: Boolean,
      default: false
    },
    showJumper: {
      type: Boolean,
      default: false
    },
    jumperBefore: {
      type: String,
      default: 'Goto'
    },
    jumperAfter: {
      type: String,
      default: ''
    },
    jumperButton: {
      type: String,
      default: ''
    },
    position: String,
    mini: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentPage: this.page,
      pager: this.page
    };
  },
  computed: {
    className() {
      let result = ['mdl-pagination'];

      if (this.mini) {
        result.push('mdl-pagination--mini');
      } else {
        if (this.showRecord) {
          result.push(`mdl-pagination--between`);
        } else if (
          [POSITION_LEFT, POSITION_RIGHT].indexOf(this.position) > -1
        ) {
          result.push(`mdl-pagination--${this.position}`);
        }
      }

      return result;
    },
    pageCount() {
      return Math.ceil(this.recordCount / this.pageSize);
    },
    currentPrev() {
      let arrow = this.mini ? SINGLE_ARROW_LEFT : DOUBLE_ARROW_LEFT;
      return this.prev || arrow;
    },
    currentNext() {
      let arrow = this.mini ? SINGLE_ARROW_RIGHT : DOUBLE_ARROW_RIGHT;
      return this.next || arrow;
    }
  },
  watch: {
    page(val) {
      this.currentPage = val;
    }
  },
  methods: {
    isShow(page) {
      let show = false;
      switch (true) {
        case page === 1:
        case page === this.pageCount:
        case this.currentPage >= page &&
          page >= this.currentPage - this.pageSpan:
        case this.currentPage <= page &&
          page <= this.currentPage + this.pageSpan:
          show = true;
          break;
      }
      return show;
    },
    showPage(page) {
      let isExisted =
        this.currentPage === page - this.pageSpan ||
        this.currentPage === page + this.pageSpan;
      let noFirstOrLast = page !== 1 && page !== this.pageCount;
      return !(isExisted && noFirstOrLast);
    },
    handleClick(page) {
      // page: number
      if (!isNaN(page)) {
        switch (true) {
          case page > this.pageCount:
            page = this.pageCount;
            break;
          case page < 1:
            page = 1;
            break;
        }
        this.$emit(EVENT_CHANGE, +page);
        this.pager = page;
      } else {
        this.pager = this.currentPage;
      }
    }
  }
};
</script>
