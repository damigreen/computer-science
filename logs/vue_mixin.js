import Vue from "vue";
import { mapActions } from "vuex";

Vue.mixin({
  computed: {
    dateToday() {
      const today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; // January is 01
      const yyyy = today.getFullYear();

      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;

      return yyyy + "-" + mm + "-" + dd;
    }
  },
  data: () => ({
    priorityClasses: {
      P1: "danger",
      P2: "warning",
      P3: "info"
    }
  }),
  filters: {
    twoDP(value) {
      return parseFloat(value).toFixed(2);
    },
    dateFormat(date) {
      if (!date) return "-";
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      const goodDate = new Date(date);
      return goodDate.toLocaleDateString("en-US", options);
    },
    ellipse(text, length=20) {
      const ellipseText = text.length > length ? "..." : "";
      return text.substring(0, length + 1) + ellipseText;
    },
    money(value, currency = "NGN") {
      if (!value) return null;
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency,
        currencyDisplay: "symbol"
      }).format(value);
    },
    moneyFormat(value) {
      value = value || 0;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    timeFormat(dateTime) {
      const goodTime = new Date(dateTime);
      return goodTime.toLocaleTimeString("en-US");
    },
    toMoney({ value, currency = { code: "NGN" } }) {
      if (!value) return null;
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: currency.code,
        currencyDisplay: "symbol"
      }).format(value);
    }
  },
  methods: {
    ...mapActions({
      toast: "toast/addToast"
    }),
    currentYear() {
      return new Date().getFullYear();
    },
    debounce(callBack = () => {}, timeOut = 500) {
      if (this.debouncer) clearTimeout(this.debouncer);
      this.debouncer = setTimeout(callBack, timeOut);
    },
    ellipse(text, length=20) {
      const ellipseText = text.length > length ? "..." : "";
      return text.substring(0, length + 1) + ellipseText;
    },
    thisOrThat(item, testAttributes) {
      var result = null;
      for (const attribute of testAttributes)
        result = item[attribute] || result;
      return result;
    }
  }
});
