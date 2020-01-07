/*Initial Variables*/
var mashiro_global = new Object();
var mashiro_option = new function() {
	this.NProgressON = true;
	this.email_domain = "moezx.cc";
	this.email_name = "me";
	this.cookie_version_control = "---2018/9/17";
	this.qzone_autocomplete = false;
	this.site_name = "樱花庄的白猫";
	this.author_name = "Mashiro";
	this.template_url = "https://2heng.xin/wp-content/themes/Sakura";
	this.site_url = "https://2heng.xin";
	this.qq_api_url = "https://api.2heng.xin/qqinfo/";
	this.qq_avatar_api_url = "https://api.2heng.xin/qqinfo/";
	this.is_app = function(app_version) {
		window.is_app = true;
		window.checked = false;
		window.app_version = app_version;
		window.latest_version = 7;
	}
	this.app_update = function(isAutoCheck) {
		if (window.app_version < window.latest_version) {
			if (isAutoCheck) {
				if (!window.checked) {
					window.checked = true;
					if (window.app_version <= 5) {
						if (window.confirm("检测到新版本，是否更新？")) {
							window.open("https://u.2heng.xin/app");
						}
					} else {
						window.open("?mashiroHasUpdate");
					}
				}
			} else {
				if (window.app_version <= 5) {
					setTimeout(function() {
						window.open("https://u.2heng.xin/app");
					}, 1000);
				} else {
					window.open("?mashiroHasUpdate");
				}
			}
		} else {
			if (window.app_version <= 5) {
				isAutoCheck ? console.info("Auto Check：已经是最新版本") : addComment.createButterbar("已经是最新版本");
			} else {
				isAutoCheck ? console.info("Auto Check：已经是最新版本") : window.open("?mashiroNoUpdate");
			}
		}
	}
}
mashiro_option.jsdelivr_css_src = "https://cdn.jsdelivr.net/gh/moezx/cdn@3.7.5/css/lib.min.css";
mashiro_option.head_notice = "off";
/*End of Initial Variables*/
console.log = function() {};
console.info("%c ZiHua %c", "background:#24272A; color:#ffffff", "", "https://liuzihua.top/");
console.info("%c Github %c", "background:#24272A; color:#ffffff", "", "https://github.com/zihuaSuperHandsome");
console.info('为什么控制台一直在报错呢？QAQ');

mashiro_option.land_at_home = true;
