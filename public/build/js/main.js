!function e(t,r,i){function n(a,s){if(!r[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var u=r[a]={exports:{}};t[a][0].call(u.exports,function(e){var r=t[a][1][e];return n(r||e)},u,u.exports,e,t,r,i)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)n(i[a]);return n}({1:[function(e,t,r){"use strict";function i(t){var r=e("./validator"),i=document.querySelectorAll(".error-message"),n={stopSubmit:!1,checked:{}};i&&i.forEach(function(e){return e.remove()});for(var o=0,a=t.length;o<a;o++){var s=t[o];if(0==s.checkValidity()){var c=new r;c.checkValidity(s);var u=c.getInvalidities();s.insertAdjacentHTML("afterend",'<p class="error-message">'+u+"</p>"),s.parentNode.classList.add("is-invalid"),n.stopSubmit=!0}else{if("button"===s.type)continue;n.checked[s.name]=s.value}}return n}t.exports=i},{"./validator":2}],2:[function(e,t,r){"use strict";function i(){}i.prototype={error:"",checkValidity:function(e){var t=e.validity;if(console.log(t),t.valueMissing&&this.addInvalidity("Поле не должно быть пусто!"),t.rangeUnderflow){var r=e.getAttribute("min");this.addInvalidity("Минимум "+r)}t.typeMismatch&&this.addInvalidity("Неверный формат данных")},addInvalidity:function(e){this.error=e},getInvalidities:function(){return this.error}},t.exports=i},{}],3:[function(e,t,r){"use strict";function i(e,t,r){var i=document.forms[e],n=new XMLHttpRequest,o=JSON.stringify(t);n.open("POST",r),n.setRequestHeader("Content-type","application/json; charset=utf-8"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&200===n.status&&i.insertAdjacentHTML("afterend",'<p class="error-message">'+n.responseText+"</p>")},n.send(o)}t.exports=i},{}],4:[function(e,t,r){"use strict";var i=e("./lib/xhr_post"),n=e("./lib/form_validation"),o=document.forms.reviewCreate,a=o.reviewCreateSubmit;window.onload=function(){for(var e=document.querySelectorAll(".mdl-js-textfield"),t=0;t<e.length;t++)e[t].classList.remove("is-invalid")},a.addEventListener("click",function(e){var t=o.elements,r=n(t);r.stopSubmit?e.preventDefault():(e.preventDefault(),i(o.name,r.checked,"/reviews/create"))})},{"./lib/form_validation":1,"./lib/xhr_post":3}]},{},[4]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZSIsInQiLCJuIiwiciIsInMiLCJvIiwidSIsImEiLCJyZXF1aXJlIiwiaSIsIkVycm9yIiwiZiIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwiMSIsIm1vZHVsZSIsImZvcm1WYWxpZGF0aW9uIiwiZm9ybSIsIlZhbGlkYXRvciIsImVycm9ycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImRhdGEiLCJzdG9wU3VibWl0IiwiY2hlY2tlZCIsImZvckVhY2giLCJpdGVtIiwicmVtb3ZlIiwibCIsImlucHV0IiwiY2hlY2tWYWxpZGl0eSIsImlucHV0VmFsaWRhdG9yIiwiY3VzdG9tVmFsaWRpdHlNZXNzYWdlIiwiZ2V0SW52YWxpZGl0aWVzIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImFkZCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCIuL3ZhbGlkYXRvciIsIjIiLCJwcm90b3R5cGUiLCJlcnJvciIsInZhbGlkaXR5IiwiY29uc29sZSIsImxvZyIsInZhbHVlTWlzc2luZyIsInRoaXMiLCJhZGRJbnZhbGlkaXR5IiwicmFuZ2VVbmRlcmZsb3ciLCJtaW4iLCJnZXRBdHRyaWJ1dGUiLCJ0eXBlTWlzbWF0Y2giLCJtZXNzYWdlIiwiMyIsInhoclBvc3QiLCJmb3JtTmFtZSIsInVybCIsImZvcm1zIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJkYXRhSlNPTiIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJET05FIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsIjQiLCJyZXZpZXdDcmVhdGVGb3JtIiwicmV2aWV3Q3JlYXRlIiwicmV2aWV3Q3JlYXRlU3VibWl0Iiwid2luZG93Iiwib25sb2FkIiwiZWxlbWVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5wdXRzIiwicHJldmVudERlZmF1bHQiLCIuL2xpYi9mb3JtX3ZhbGlkYXRpb24iLCIuL2xpYi94aHJfcG9zdCJdLCJtYXBwaW5ncyI6IkNBQUEsUUFBVUEsR0FBRUMsRUFBRUMsRUFBRUMsR0FBRyxRQUFTQyxHQUFFQyxFQUFFQyxHQUFHLElBQUlKLEVBQUVHLEdBQUcsQ0FBQyxJQUFJSixFQUFFSSxHQUFHLENBQUMsR0FBSUUsR0FBa0Isa0JBQVRDLFVBQXFCQSxPQUFRLEtBQUlGLEdBQUdDLEVBQUUsTUFBT0EsR0FBRUYsR0FBRSxFQUFJLElBQUdJLEVBQUUsTUFBT0EsR0FBRUosR0FBRSxFQUFJLE1BQU0sSUFBSUssT0FBTSx1QkFBdUJMLEVBQUUsS0FBSyxHQUFJTSxHQUFFVCxFQUFFRyxJQUFJTyxXQUFZWCxHQUFFSSxHQUFHLEdBQUdRLEtBQUtGLEVBQUVDLFFBQVEsU0FBU1osR0FBRyxHQUFJRSxHQUFFRCxFQUFFSSxHQUFHLEdBQUdMLEVBQUcsT0FBT0ksR0FBRUYsR0FBSUYsSUFBSVcsRUFBRUEsRUFBRUMsUUFBUVosRUFBRUMsRUFBRUMsRUFBRUMsR0FBRyxNQUFPRCxHQUFFRyxHQUFHTyxRQUFrRCxJQUFJLEdBQTFDSCxHQUFrQixrQkFBVEQsVUFBcUJBLFFBQWdCSCxFQUFFLEVBQUVBLEVBQUVGLEVBQUVXLE9BQU9ULElBQUlELEVBQUVELEVBQUVFLEdBQUksT0FBT0QsS0FBS1csR0FBRyxTQUFTUCxFQUFRUSxFQUFPSixHQUNyYixZQUVBLFNBQVNLLEdBQWVDLEdBQ3RCLEdBQUlDLEdBQVlYLEVBQVEsZUFDcEJZLEVBQVNDLFNBQVNDLGlCQUFpQixrQkFDbkNDLEdBQ0ZDLFlBQVksRUFDWkMsV0FHRUwsSUFDRkEsRUFBT00sUUFBUSxTQUFVQyxHQUN2QixNQUFPQSxHQUFLQyxVQUloQixLQUFLLEdBQUluQixHQUFJLEVBQUdvQixFQUFJWCxFQUFLSixPQUFRTCxFQUFJb0IsRUFBR3BCLElBQUssQ0FDM0MsR0FBSXFCLEdBQVFaLEVBQUtULEVBQ2pCLElBQTZCLEdBQXpCcUIsRUFBTUMsZ0JBQTBCLENBQ2xDLEdBQUlDLEdBQWlCLEdBQUliLEVBQ3pCYSxHQUFlRCxjQUFjRCxFQUM3QixJQUFJRyxHQUF3QkQsRUFBZUUsaUJBQzNDSixHQUFNSyxtQkFBbUIsV0FBWSw0QkFBOEJGLEVBQXdCLFFBQzNGSCxFQUFNTSxXQUFXQyxVQUFVQyxJQUFJLGNBQy9CZixFQUFLQyxZQUFhLE1BQ2IsQ0FDTCxHQUFtQixXQUFmTSxFQUFNUyxLQUFtQixRQUM3QmhCLEdBQUtFLFFBQVFLLEVBQU1VLE1BQVFWLEVBQU1XLE9BR3JDLE1BQU9sQixHQUdUUCxFQUFPSixRQUFVSyxJQUVkeUIsY0FBYyxJQUFJQyxHQUFHLFNBQVNuQyxFQUFRUSxFQUFPSixHQUNoRCxZQUVBLFNBQVNPLE1BRVRBLEVBQVV5QixXQUNSQyxNQUFPLEdBQ1BkLGNBQWUsU0FBdUJELEdBQ3BDLEdBQUlnQixHQUFXaEIsRUFBTWdCLFFBT3JCLElBTkFDLFFBQVFDLElBQUlGLEdBRVJBLEVBQVNHLGNBQ1hDLEtBQUtDLGNBQWMsOEJBR2pCTCxFQUFTTSxlQUFnQixDQUMzQixHQUFJQyxHQUFNdkIsRUFBTXdCLGFBQWEsTUFDN0JKLE1BQUtDLGNBQWMsV0FBYUUsR0FHOUJQLEVBQVNTLGNBQ1hMLEtBQUtDLGNBQWMsMkJBS3ZCQSxjQUFlLFNBQXVCSyxHQUNwQ04sS0FBS0wsTUFBUVcsR0FJZnRCLGdCQUFpQixXQUNmLE1BQU9nQixNQUFLTCxRQUloQjdCLEVBQU9KLFFBQVVPLE9BRVhzQyxHQUFHLFNBQVNqRCxFQUFRUSxFQUFPSixHQUNqQyxZQUVBLFNBQVM4QyxHQUFRQyxFQUFVcEMsRUFBTXFDLEdBQy9CLEdBQUkxQyxHQUFPRyxTQUFTd0MsTUFBTUYsR0FDdEJHLEVBQU0sR0FBSUMsZ0JBQ1ZDLEVBQVdDLEtBQUtDLFVBQVUzQyxFQUM5QnVDLEdBQUlLLEtBQUssT0FBUVAsR0FDakJFLEVBQUlNLGlCQUFpQixlQUFnQixtQ0FDckNOLEVBQUlPLG1CQUFxQixXQUNuQlAsRUFBSVEsYUFBZVAsZUFBZVEsTUFBdUIsTUFBZlQsRUFBSVUsUUFDaER0RCxFQUFLaUIsbUJBQW1CLFdBQVksNEJBQThCMkIsRUFBSVcsYUFBZSxTQUd6RlgsRUFBSVksS0FBS1YsR0FHWGhELEVBQU9KLFFBQVU4QyxPQUVYaUIsR0FBRyxTQUFTbkUsRUFBUVEsRUFBT0osR0FDakMsWUFFQSxJQUFJOEMsR0FBVWxELEVBQVEsa0JBQ2xCUyxFQUFpQlQsRUFBUSx5QkFDekJvRSxFQUFtQnZELFNBQVN3QyxNQUFNZ0IsYUFDbENDLEVBQXFCRixFQUFpQkUsa0JBRTFDQyxRQUFPQyxPQUFTLFdBRWQsSUFBSyxHQUREQyxHQUFXNUQsU0FBU0MsaUJBQWlCLHFCQUNoQ2IsRUFBSSxFQUFHQSxFQUFJd0UsRUFBU25FLE9BQVFMLElBQ25Dd0UsRUFBU3hFLEdBQUc0QixVQUFVVCxPQUFPLGVBS2pDa0QsRUFBbUJJLGlCQUFpQixRQUFTLFNBQVVsRixHQUNyRCxHQUFJbUYsR0FBU1AsRUFBaUJLLFNBRTFCMUQsRUFBT04sRUFBZWtFLEVBRXRCNUQsR0FBS0MsV0FDUHhCLEVBQUVvRixrQkFFRnBGLEVBQUVvRixpQkFDRjFCLEVBQVFrQixFQUFpQnBDLEtBQU1qQixFQUFLRSxRQVA1Qix3QkFXVDRELHdCQUF3QixFQUFFQyxpQkFBaUIsU0FBUyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBmb3JtVmFsaWRhdGlvbihmb3JtKSB7XG4gIHZhciBWYWxpZGF0b3IgPSByZXF1aXJlKCcuL3ZhbGlkYXRvcicpO1xuICB2YXIgZXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yLW1lc3NhZ2UnKTtcbiAgdmFyIGRhdGEgPSB7XG4gICAgc3RvcFN1Ym1pdDogZmFsc2UsXG4gICAgY2hlY2tlZDoge31cbiAgfTtcblxuICBpZiAoZXJyb3JzKSB7XG4gICAgZXJyb3JzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBmb3JtLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBpbnB1dCA9IGZvcm1baV07XG4gICAgaWYgKGlucHV0LmNoZWNrVmFsaWRpdHkoKSA9PSBmYWxzZSkge1xuICAgICAgdmFyIGlucHV0VmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpO1xuICAgICAgaW5wdXRWYWxpZGF0b3IuY2hlY2tWYWxpZGl0eShpbnB1dCk7XG4gICAgICB2YXIgY3VzdG9tVmFsaWRpdHlNZXNzYWdlID0gaW5wdXRWYWxpZGF0b3IuZ2V0SW52YWxpZGl0aWVzKCk7XG4gICAgICBpbnB1dC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgJzxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPicgKyBjdXN0b21WYWxpZGl0eU1lc3NhZ2UgKyAnPC9wPicpO1xuICAgICAgaW5wdXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XG4gICAgICBkYXRhLnN0b3BTdWJtaXQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ2J1dHRvbicpIGNvbnRpbnVlO1xuICAgICAgZGF0YS5jaGVja2VkW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1WYWxpZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1admNtMWZkbUZzYVdSaGRHbHZiaTVxY3lKZExDSnVZVzFsY3lJNld5Sm1iM0p0Vm1Gc2FXUmhkR2x2YmlJc0ltWnZjbTBpTENKV1lXeHBaR0YwYjNJaUxDSnlaWEYxYVhKbElpd2laWEp5YjNKeklpd2laRzlqZFcxbGJuUWlMQ0p4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNJaXdpWkdGMFlTSXNJbk4wYjNCVGRXSnRhWFFpTENKamFHVmphMlZrSWl3aVptOXlSV0ZqYUNJc0ltbDBaVzBpTENKeVpXMXZkbVVpTENKcElpd2liQ0lzSW14bGJtZDBhQ0lzSW1sdWNIVjBJaXdpWTJobFkydFdZV3hwWkdsMGVTSXNJbWx1Y0hWMFZtRnNhV1JoZEc5eUlpd2lZM1Z6ZEc5dFZtRnNhV1JwZEhsTlpYTnpZV2RsSWl3aVoyVjBTVzUyWVd4cFpHbDBhV1Z6SWl3aWFXNXpaWEowUVdScVlXTmxiblJJVkUxTUlpd2ljR0Z5Wlc1MFRtOWtaU0lzSW1Oc1lYTnpUR2x6ZENJc0ltRmtaQ0lzSW5SNWNHVWlMQ0p1WVcxbElpd2lkbUZzZFdVaUxDSnRiMlIxYkdVaUxDSmxlSEJ2Y25SeklsMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMRk5CUVZOQkxHTkJRVlFzUTBGQmQwSkRMRWxCUVhoQ0xFVkJRVGhDTzBGQlF6VkNMRTFCUVUxRExGbEJRVmxETEZGQlFWRXNZVUZCVWl4RFFVRnNRanRCUVVOQkxFMUJRVWxETEZOQlFWTkRMRk5CUVZORExHZENRVUZVTEVOQlFUQkNMR2RDUVVFeFFpeERRVUZpTzBGQlEwRXNUVUZCU1VNc1QwRkJUenRCUVVOVVF5eG5Ra0ZCV1N4TFFVUklPMEZCUlZSRExHRkJRVk03UVVGR1FTeEhRVUZZT3p0QlFVdEJMRTFCUVVkTUxFMUJRVWdzUlVGQlZUdEJRVU5TUVN4WFFVRlBUU3hQUVVGUUxFTkJRV1VzVlVGQlEwTXNTVUZCUkR0QlFVRkJMR0ZCUVZWQkxFdEJRVXRETEUxQlFVd3NSVUZCVmp0QlFVRkJMRXRCUVdZN1FVRkRSRHM3UVVGRlJDeFBRVUZMTEVsQlFVbERMRWxCUVVrc1EwRkJVaXhGUVVGWFF5eEpRVUZKWWl4TFFVRkxZeXhOUVVGNlFpeEZRVUZwUTBZc1NVRkJTVU1zUTBGQmNrTXNSVUZCZDBORUxFZEJRWGhETEVWQlFUWkRPMEZCUXpORExGRkJRVWxITEZGQlFWRm1MRXRCUVV0WkxFTkJRVXdzUTBGQldqdEJRVU5CTEZGQlFVbEhMRTFCUVUxRExHRkJRVTRzVFVGQmVVSXNTMEZCTjBJc1JVRkJiME03UVVGRGJFTXNWVUZCU1VNc2FVSkJRV2xDTEVsQlFVbG9RaXhUUVVGS0xFVkJRWEpDTzBGQlEwRm5RaXh4UWtGQlpVUXNZVUZCWml4RFFVRTJRa1FzUzBGQk4wSTdRVUZEUVN4VlFVRkpSeXgzUWtGQmQwSkVMR1ZCUVdWRkxHVkJRV1lzUlVGQk5VSTdRVUZEUVVvc1dVRkJUVXNzYTBKQlFVNHNRMEZCZVVJc1ZVRkJla0lzUlVGQmNVTXNPRUpCUVRoQ1JpeHhRa0ZCT1VJc1IwRkJjMFFzVFVGQk0wWTdRVUZEUVVnc1dVRkJUVTBzVlVGQlRpeERRVUZwUWtNc1UwRkJha0lzUTBGQk1rSkRMRWRCUVROQ0xFTkJRU3RDTEZsQlFTOUNPMEZCUTBGcVFpeFhRVUZMUXl4VlFVRk1MRWRCUVd0Q0xFbEJRV3hDTzBGQlEwUXNTMEZRUkN4TlFVOUxPMEZCUTBnc1ZVRkJTVkVzVFVGQlRWTXNTVUZCVGl4TFFVRmxMRkZCUVc1Q0xFVkJRVFpDTzBGQlF6ZENiRUlzVjBGQlMwVXNUMEZCVEN4RFFVRmhUeXhOUVVGTlZTeEpRVUZ1UWl4SlFVRXlRbFlzVFVGQlRWY3NTMEZCYWtNN1FVRkRSRHRCUVVOR08wRkJRMFFzVTBGQlQzQkNMRWxCUVZBN1FVRkRSRHM3UVVGRlJIRkNMRTlCUVU5RExFOUJRVkFzUjBGQmFVSTNRaXhqUVVGcVFpSXNJbVpwYkdVaU9pSm1iM0p0WDNaaGJHbGtZWFJwYjI0dWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUptZFc1amRHbHZiaUJtYjNKdFZtRnNhV1JoZEdsdmJpaG1iM0p0S1NCN1hISmNiaUFnWTI5dWMzUWdWbUZzYVdSaGRHOXlJRDBnY21WeGRXbHlaU2duTGk5MllXeHBaR0YwYjNJbktUdGNjbHh1SUNCc1pYUWdaWEp5YjNKeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MbVZ5Y205eUxXMWxjM05oWjJVbktUdGNjbHh1SUNCc1pYUWdaR0YwWVNBOUlIdGNjbHh1SUNBZ0lITjBiM0JUZFdKdGFYUTZJR1poYkhObExGeHlYRzRnSUNBZ1kyaGxZMnRsWkRvZ2UzMWNjbHh1SUNCOU8xeHlYRzVjY2x4dUlDQnBaaWhsY25KdmNuTXBlMXh5WEc0Z0lDQWdaWEp5YjNKekxtWnZja1ZoWTJnb0tHbDBaVzBwSUQwK0lHbDBaVzB1Y21WdGIzWmxLQ2twTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQXNJR3dnUFNCbWIzSnRMbXhsYm1kMGFEc2dhU0E4SUd3N0lHa3JLeWtnZTF4eVhHNGdJQ0FnYkdWMElHbHVjSFYwSUQwZ1ptOXliVnRwWFR0Y2NseHVJQ0FnSUdsbUlDaHBibkIxZEM1amFHVmphMVpoYkdsa2FYUjVLQ2tnUFQwZ1ptRnNjMlVwSUh0Y2NseHVJQ0FnSUNBZ2JHVjBJR2x1Y0hWMFZtRnNhV1JoZEc5eUlEMGdibVYzSUZaaGJHbGtZWFJ2Y2lncE8xeHlYRzRnSUNBZ0lDQnBibkIxZEZaaGJHbGtZWFJ2Y2k1amFHVmphMVpoYkdsa2FYUjVLR2x1Y0hWMEtUdGNjbHh1SUNBZ0lDQWdiR1YwSUdOMWMzUnZiVlpoYkdsa2FYUjVUV1Z6YzJGblpTQTlJR2x1Y0hWMFZtRnNhV1JoZEc5eUxtZGxkRWx1ZG1Gc2FXUnBkR2xsY3lncE8xeHlYRzRnSUNBZ0lDQnBibkIxZEM1cGJuTmxjblJCWkdwaFkyVnVkRWhVVFV3b0oyRm1kR1Z5Wlc1a0p5d2dKenh3SUdOc1lYTnpQVndpWlhKeWIzSXRiV1Z6YzJGblpWd2lQaWNnS3lCamRYTjBiMjFXWVd4cFpHbDBlVTFsYzNOaFoyVWdLeUFuUEM5d1BpY3BPMXh5WEc0Z0lDQWdJQ0JwYm5CMWRDNXdZWEpsYm5ST2IyUmxMbU5zWVhOelRHbHpkQzVoWkdRb0oybHpMV2x1ZG1Gc2FXUW5LVHRjY2x4dUlDQWdJQ0FnWkdGMFlTNXpkRzl3VTNWaWJXbDBJRDBnZEhKMVpUdGNjbHh1SUNBZ0lIMWxiSE5sZTF4eVhHNGdJQ0FnSUNCcFppQW9hVzV3ZFhRdWRIbHdaU0E5UFQwZ0oySjFkSFJ2YmljcElHTnZiblJwYm5WbE8xeHlYRzRnSUNBZ0lDQmtZWFJoTG1Ob1pXTnJaV1JiYVc1d2RYUXVibUZ0WlYwZ1BTQnBibkIxZEM1MllXeDFaVHRjY2x4dUlDQWdJSDFjY2x4dUlDQjlYSEpjYmlBZ2NtVjBkWEp1SUdSaGRHRTdYSEpjYm4xY2NseHVYSEpjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm05eWJWWmhiR2xrWVhScGIyNDdJbDE5XG59LHtcIi4vdmFsaWRhdG9yXCI6Mn1dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBWYWxpZGF0b3IoKSB7fVxuXG5WYWxpZGF0b3IucHJvdG90eXBlID0ge1xuICBlcnJvcjogJycsXG4gIGNoZWNrVmFsaWRpdHk6IGZ1bmN0aW9uIGNoZWNrVmFsaWRpdHkoaW5wdXQpIHtcbiAgICB2YXIgdmFsaWRpdHkgPSBpbnB1dC52YWxpZGl0eTtcbiAgICBjb25zb2xlLmxvZyh2YWxpZGl0eSk7XG5cbiAgICBpZiAodmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICB0aGlzLmFkZEludmFsaWRpdHkoJ9Cf0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC/0YPRgdGC0L4hJyk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkaXR5LnJhbmdlVW5kZXJmbG93KSB7XG4gICAgICB2YXIgbWluID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdtaW4nKTtcbiAgICAgIHRoaXMuYWRkSW52YWxpZGl0eSgn0JzQuNC90LjQvNGD0LwgJyArIG1pbik7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xuICAgICAgdGhpcy5hZGRJbnZhbGlkaXR5KCfQndC10LLQtdGA0L3Ri9C5INGE0L7RgNC80LDRgiDQtNCw0L3QvdGL0YUnKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGB0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtSDQsiDQvNCw0YHRgdC40LIg0L7RiNC40LHQvtC6XG4gIGFkZEludmFsaWRpdHk6IGZ1bmN0aW9uIGFkZEludmFsaWRpdHkobWVzc2FnZSkge1xuICAgIHRoaXMuZXJyb3IgPSBtZXNzYWdlO1xuICB9LFxuXG4gIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L7QsdGJ0LjQuSDRgtC10LrRgdGCINGB0L7QvtCx0YnQtdC90LjQuSDQvtCxINC+0YjQuNCx0LrQsNGFXG4gIGdldEludmFsaWRpdGllczogZnVuY3Rpb24gZ2V0SW52YWxpZGl0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZhbGlkYXRvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluWmhiR2xrWVhSdmNpNXFjeUpkTENKdVlXMWxjeUk2V3lKV1lXeHBaR0YwYjNJaUxDSndjbTkwYjNSNWNHVWlMQ0psY25KdmNpSXNJbU5vWldOclZtRnNhV1JwZEhraUxDSnBibkIxZENJc0luWmhiR2xrYVhSNUlpd2lZMjl1YzI5c1pTSXNJbXh2WnlJc0luWmhiSFZsVFdsemMybHVaeUlzSW1Ga1pFbHVkbUZzYVdScGRIa2lMQ0p5WVc1blpWVnVaR1Z5Wm14dmR5SXNJbTFwYmlJc0ltZGxkRUYwZEhKcFluVjBaU0lzSW5SNWNHVk5hWE50WVhSamFDSXNJbTFsYzNOaFoyVWlMQ0puWlhSSmJuWmhiR2xrYVhScFpYTWlMQ0p0YjJSMWJHVWlMQ0psZUhCdmNuUnpJbDBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEZOQlFWTkJMRk5CUVZRc1IwRkJjVUlzUTBGQlJUczdRVUZGZGtKQkxGVkJRVlZETEZOQlFWWXNSMEZCYzBJN1FVRkRjRUpETEZOQlFVOHNSVUZFWVR0QlFVVndRa01zYVVKQlFXVXNkVUpCUVZORExFdEJRVlFzUlVGQlowSTdRVUZETjBJc1VVRkJTVU1zVjBGQlYwUXNUVUZCVFVNc1VVRkJja0k3UVVGRFFVTXNXVUZCVVVNc1IwRkJVaXhEUVVGWlJpeFJRVUZhT3p0QlFVVkJMRkZCUVVsQkxGTkJRVk5ITEZsQlFXSXNSVUZCTWtJN1FVRkRla0lzVjBGQlMwTXNZVUZCVEN4RFFVRnRRaXcwUWtGQmJrSTdRVUZEUkRzN1FVRkZSQ3hSUVVGSlNpeFRRVUZUU3l4alFVRmlMRVZCUVRaQ08wRkJRek5DTEZWQlFVbERMRTFCUVUxUUxFMUJRVTFSTEZsQlFVNHNRMEZCYlVJc1MwRkJia0lzUTBGQlZqdEJRVU5CTEZkQlFVdElMR0ZCUVV3c1EwRkJiVUlzWVVGQllVVXNSMEZCYUVNN1FVRkRSRHM3UVVGRlJDeFJRVUZKVGl4VFFVRlRVU3haUVVGaUxFVkJRVEpDTzBGQlEzcENMRmRCUVV0S0xHRkJRVXdzUTBGQmJVSXNkMEpCUVc1Q08wRkJRMFE3UVVGRFJpeEhRV3hDYlVJN08wRkJiMEp3UWp0QlFVTkJRU3hwUWtGQlpTeDFRa0ZCVTBzc1QwRkJWQ3hGUVVGclFqdEJRVU12UWl4VFFVRkxXaXhMUVVGTUxFZEJRV0ZaTEU5QlFXSTdRVUZEUkN4SFFYWkNiVUk3TzBGQmVVSndRanRCUVVOQlF5eHRRa0ZCYVVJc01rSkJRVmM3UVVGRE1VSXNWMEZCVHl4TFFVRkxZaXhMUVVGYU8wRkJRMFE3UVVFMVFtMUNMRU5CUVhSQ096dEJRU3RDUVdNc1QwRkJUME1zVDBGQlVDeEhRVUZwUW1wQ0xGTkJRV3BDSWl3aVptbHNaU0k2SW5aaGJHbGtZWFJ2Y2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVoxYm1OMGFXOXVJRlpoYkdsa1lYUnZjaWdwSUh0OVhISmNibHh5WEc1V1lXeHBaR0YwYjNJdWNISnZkRzkwZVhCbElEMGdlMXh5WEc0Z0lHVnljbTl5T2lBbkp5eGNjbHh1SUNCamFHVmphMVpoYkdsa2FYUjVPaUJtZFc1amRHbHZiaWhwYm5CMWRDa2dlMXh5WEc0Z0lDQWdkbUZ5SUhaaGJHbGthWFI1SUQwZ2FXNXdkWFF1ZG1Gc2FXUnBkSGs3WEhKY2JpQWdJQ0JqYjI1emIyeGxMbXh2WnloMllXeHBaR2wwZVNrN1hISmNibHh5WEc0Z0lDQWdhV1lnS0haaGJHbGthWFI1TG5aaGJIVmxUV2x6YzJsdVp5a2dlMXh5WEc0Z0lDQWdJQ0IwYUdsekxtRmtaRWx1ZG1Gc2FXUnBkSGtvSjlDZjBMN1F1OUMxSU5DOTBMVWcwTFRRdnRDNzBMYlF2ZEMrSU5DeDBZdlJndEdNSU5DLzBZUFJnZEdDMEw0aEp5azdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tIWmhiR2xrYVhSNUxuSmhibWRsVlc1a1pYSm1iRzkzS1NCN1hISmNiaUFnSUNBZ0lIWmhjaUJ0YVc0Z1BTQnBibkIxZEM1blpYUkJkSFJ5YVdKMWRHVW9KMjFwYmljcE8xeHlYRzRnSUNBZ0lDQjBhR2x6TG1Ga1pFbHVkbUZzYVdScGRIa29KOUNjMExqUXZkQzQwTHpSZzlDOElDY2dLeUJ0YVc0cE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR2xtSUNoMllXeHBaR2wwZVM1MGVYQmxUV2x6YldGMFkyZ3BJSHRjY2x4dUlDQWdJQ0FnZEdocGN5NWhaR1JKYm5aaGJHbGthWFI1S0NmUW5kQzEwTExRdGRHQTBMM1JpOUM1SU5HRTBMN1JnTkM4MExEUmdpRFF0TkN3MEwzUXZkR0wwWVVuS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5TEZ4eVhHNWNjbHh1SUNBdkx5RFFsTkMrMExIUXNOQ3kwTHZSajlDMTBMd2cwWUhRdnRDKzBMSFJpZEMxMEwzUXVOQzFJTkMrMExFZzBMN1JpTkM0MExIUXV0QzFJTkN5SU5DODBMRFJnZEdCMExqUXNpRFF2dEdJMExqUXNkQyswTHBjY2x4dUlDQmhaR1JKYm5aaGJHbGthWFI1T2lCbWRXNWpkR2x2YmlodFpYTnpZV2RsS1NCN1hISmNiaUFnSUNCMGFHbHpMbVZ5Y205eUlEMGdiV1Z6YzJGblpUdGNjbHh1SUNCOUxGeHlYRzVjY2x4dUlDQXZMeURRbjlDKzBMdlJnOUdIMExEUXRkQzhJTkMrMExIUmlkQzQwTGtnMFlMUXRkQzYwWUhSZ2lEUmdkQyswTDdRc2RHSjBMWFF2ZEM0MExrZzBMN1FzU0RRdnRHSTBMalFzZEM2MExEUmhWeHlYRzRnSUdkbGRFbHVkbUZzYVdScGRHbGxjem9nWm5WdVkzUnBiMjRvS1NCN1hISmNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWxjbkp2Y2p0Y2NseHVJQ0I5TEZ4eVhHNTlPMXh5WEc1Y2NseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQldZV3hwWkdGMGIzSTdJbDE5XG59LHt9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24geGhyUG9zdChmb3JtTmFtZSwgZGF0YSwgdXJsKSB7XG4gIHZhciBmb3JtID0gZG9jdW1lbnQuZm9ybXNbZm9ybU5hbWVdO1xuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHZhciBkYXRhSlNPTiA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICB4aHIub3BlbihcIlBPU1RcIiwgdXJsKTtcbiAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgZm9ybS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgJzxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPicgKyB4aHIucmVzcG9uc2VUZXh0ICsgJzwvcD4nKTtcbiAgICB9XG4gIH07XG4gIHhoci5zZW5kKGRhdGFKU09OKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB4aHJQb3N0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5ob2NsOXdiM04wTG1weklsMHNJbTVoYldWeklqcGJJbmhvY2xCdmMzUWlMQ0ptYjNKdFRtRnRaU0lzSW1SaGRHRWlMQ0oxY213aUxDSm1iM0p0SWl3aVpHOWpkVzFsYm5RaUxDSm1iM0p0Y3lJc0luaG9jaUlzSWxoTlRFaDBkSEJTWlhGMVpYTjBJaXdpWkdGMFlVcFRUMDRpTENKS1UwOU9JaXdpYzNSeWFXNW5hV1o1SWl3aWIzQmxiaUlzSW5ObGRGSmxjWFZsYzNSSVpXRmtaWElpTENKdmJuSmxZV1I1YzNSaGRHVmphR0Z1WjJVaUxDSnlaV0ZrZVZOMFlYUmxJaXdpUkU5T1JTSXNJbk4wWVhSMWN5SXNJbWx1YzJWeWRFRmthbUZqWlc1MFNGUk5UQ0lzSW5KbGMzQnZibk5sVkdWNGRDSXNJbk5sYm1RaUxDSnRiMlIxYkdVaUxDSmxlSEJ2Y25SeklsMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMRk5CUVZOQkxFOUJRVlFzUTBGQmFVSkRMRkZCUVdwQ0xFVkJRVEpDUXl4SlFVRXpRaXhGUVVGcFEwTXNSMEZCYWtNc1JVRkJjVU03UVVGRGJrTXNUVUZCVFVNc1QwRkJUME1zVTBGQlUwTXNTMEZCVkN4RFFVRmxUQ3hSUVVGbUxFTkJRV0k3UVVGRFFTeE5RVUZKVFN4TlFVRk5MRWxCUVVsRExHTkJRVW9zUlVGQlZqdEJRVU5CTEUxQlFVbERMRmRCUVZkRExFdEJRVXRETEZOQlFVd3NRMEZCWlZRc1NVRkJaaXhEUVVGbU8wRkJRMEZMTEUxQlFVbExMRWxCUVVvc1EwRkJVeXhOUVVGVUxFVkJRV2xDVkN4SFFVRnFRanRCUVVOQlNTeE5RVUZKVFN4blFrRkJTaXhEUVVGeFFpeGpRVUZ5UWl4RlFVRnhReXhwUTBGQmNrTTdRVUZEUVU0c1RVRkJTVThzYTBKQlFVb3NSMEZCZVVJc1dVRkJUVHRCUVVNM1FpeFJRVUZKVUN4SlFVRkpVU3hWUVVGS0xFdEJRVzFDVUN4bFFVRmxVU3hKUVVGc1F5eEpRVUV3UTFRc1NVRkJTVlVzVFVGQlNpeExRVUZsTEVkQlFUZEVMRVZCUVd0Rk8wRkJRMmhGWWl4WFFVRkxZeXhyUWtGQlRDeERRVUYzUWl4VlFVRjRRaXhGUVVGdlF5dzRRa0ZCT0VKWUxFbEJRVWxaTEZsQlFXeERMRWRCUVdsRUxFMUJRWEpHTzBGQlEwUTdRVUZEUml4SFFVcEVPMEZCUzBGYUxFMUJRVWxoTEVsQlFVb3NRMEZCVTFnc1VVRkJWRHRCUVVORU96dEJRVVZFV1N4UFFVRlBReXhQUVVGUUxFZEJRV2xDZEVJc1QwRkJha0lpTENKbWFXeGxJam9pZUdoeVgzQnZjM1F1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5Sm1kVzVqZEdsdmJpQjRhSEpRYjNOMEtHWnZjbTFPWVcxbExDQmtZWFJoTENCMWNtd3BlMXh5WEc0Z0lHTnZibk4wSUdadmNtMGdQU0JrYjJOMWJXVnVkQzVtYjNKdGMxdG1iM0p0VG1GdFpWMDdYSEpjYmlBZ2JHVjBJSGhvY2lBOUlHNWxkeUJZVFV4SWRIUndVbVZ4ZFdWemRDZ3BPMXh5WEc0Z0lHeGxkQ0JrWVhSaFNsTlBUaUE5SUVwVFQwNHVjM1J5YVc1bmFXWjVLR1JoZEdFcE8xeHlYRzRnSUhob2NpNXZjR1Z1S0Z3aVVFOVRWRndpTENCMWNtd3BPMXh5WEc0Z0lIaG9jaTV6WlhSU1pYRjFaWE4wU0dWaFpHVnlLQ2REYjI1MFpXNTBMWFI1Y0dVbkxDQW5ZWEJ3YkdsallYUnBiMjR2YW5OdmJqc2dZMmhoY25ObGREMTFkR1l0T0NjcE8xeHlYRzRnSUhob2NpNXZibkpsWVdSNWMzUmhkR1ZqYUdGdVoyVWdQU0FvS1NBOVBpQjdYSEpjYmlBZ0lDQnBaaUFvZUdoeUxuSmxZV1I1VTNSaGRHVWdQVDA5SUZoTlRFaDBkSEJTWlhGMVpYTjBMa1JQVGtVZ0ppWWdlR2h5TG5OMFlYUjFjeUE5UFQwZ01qQXdLU0I3WEhKY2JpQWdJQ0FnSUdadmNtMHVhVzV6WlhKMFFXUnFZV05sYm5SSVZFMU1LQ2RoWm5SbGNtVnVaQ2NzSUNjOGNDQmpiR0Z6Y3oxY0ltVnljbTl5TFcxbGMzTmhaMlZjSWo0bklDc2dlR2h5TG5KbGMzQnZibk5sVkdWNGRDQXJJQ2M4TDNBK0p5bGNjbHh1SUNBZ0lIMWNjbHh1SUNCOVhISmNiaUFnZUdoeUxuTmxibVFvWkdGMFlVcFRUMDRwTzF4eVhHNTlYSEpjYmx4eVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlIaG9jbEJ2YzNRN0lsMTlcbn0se31dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgeGhyUG9zdCA9IHJlcXVpcmUoJy4vbGliL3hocl9wb3N0Jyk7XG52YXIgZm9ybVZhbGlkYXRpb24gPSByZXF1aXJlKCcuL2xpYi9mb3JtX3ZhbGlkYXRpb24nKTtcbnZhciByZXZpZXdDcmVhdGVGb3JtID0gZG9jdW1lbnQuZm9ybXMucmV2aWV3Q3JlYXRlO1xudmFyIHJldmlld0NyZWF0ZVN1Ym1pdCA9IHJldmlld0NyZWF0ZUZvcm0ucmV2aWV3Q3JlYXRlU3VibWl0O1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWRsLWpzLXRleHRmaWVsZCcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZWxlbWVudHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52YWxpZCcpO1xuICB9XG59O1xuXG4vLyDQodCy0LXQttCw0Y8g0LrRgNC+0LLRjFxucmV2aWV3Q3JlYXRlU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgdmFyIGlucHV0cyA9IHJldmlld0NyZWF0ZUZvcm0uZWxlbWVudHM7XG4gIHZhciB1cmwgPSBcIi9yZXZpZXdzL2NyZWF0ZVwiO1xuICB2YXIgZGF0YSA9IGZvcm1WYWxpZGF0aW9uKGlucHV0cyk7XG5cbiAgaWYgKGRhdGEuc3RvcFN1Ym1pdCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSBlbHNlIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgeGhyUG9zdChyZXZpZXdDcmVhdGVGb3JtLm5hbWUsIGRhdGEuY2hlY2tlZCwgdXJsKTtcbiAgfTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW0xaGFXNHVhbk1pWFN3aWJtRnRaWE1pT2xzaWVHaHlVRzl6ZENJc0luSmxjWFZwY21VaUxDSm1iM0p0Vm1Gc2FXUmhkR2x2YmlJc0luSmxkbWxsZDBOeVpXRjBaVVp2Y20waUxDSmtiMk4xYldWdWRDSXNJbVp2Y20xeklpd2ljbVYyYVdWM1EzSmxZWFJsSWl3aWNtVjJhV1YzUTNKbFlYUmxVM1ZpYldsMElpd2lkMmx1Wkc5M0lpd2liMjVzYjJGa0lpd2laV3hsYldWdWRITWlMQ0p4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNJaXdpYVNJc0lteGxibWQwYUNJc0ltTnNZWE56VEdsemRDSXNJbkpsYlc5MlpTSXNJbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSWlMQ0pwYm5CMWRITWlMQ0oxY213aUxDSmtZWFJoSWl3aWMzUnZjRk4xWW0xcGRDSXNJbVVpTENKd2NtVjJaVzUwUkdWbVlYVnNkQ0lzSW01aGJXVWlMQ0pqYUdWamEyVmtJbDBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEVsQlFVMUJMRlZCUVZWRExGRkJRVkVzWjBKQlFWSXNRMEZCYUVJN1FVRkRRU3hKUVVGTlF5eHBRa0ZCYVVKRUxGRkJRVkVzZFVKQlFWSXNRMEZCZGtJN1FVRkRRU3hKUVVGTlJTeHRRa0ZCYlVKRExGTkJRVk5ETEV0QlFWUXNRMEZCWlVNc1dVRkJlRU03UVVGRFFTeEpRVUZOUXl4eFFrRkJjVUpLTEdsQ1FVRnBRa2tzYTBKQlFUVkRPenRCUVVWQlF5eFBRVUZQUXl4TlFVRlFMRWRCUVdkQ0xGbEJRVTA3UVVGRGNFSXNUVUZCU1VNc1YwRkJWMDRzVTBGQlUwOHNaMEpCUVZRc1EwRkJNRUlzYlVKQlFURkNMRU5CUVdZN1FVRkRRU3hQUVVGTExFbEJRVWxETEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNVWXNVMEZCVTBjc1RVRkJOMElzUlVGQmNVTkVMRWRCUVhKRExFVkJRVEJETzBGQlEzaERSaXhoUVVGVFJTeERRVUZVTEVWQlFWbEZMRk5CUVZvc1EwRkJjMEpETEUxQlFYUkNMRU5CUVRaQ0xGbEJRVGRDTzBGQlEwUTdRVUZEUml4RFFVeEVPenRCUVU5Qk8wRkJRMEZTTEcxQ1FVRnRRbE1zWjBKQlFXNUNMRU5CUVc5RExFOUJRWEJETEVWQlFUWkRMR0ZCUVVzN1FVRkRhRVFzVFVGQlNVTXNVMEZCVTJRc2FVSkJRV2xDVHl4UlFVRTVRanRCUVVOQkxFMUJRVWxSTEUxQlFVMHNhVUpCUVZZN1FVRkRRU3hOUVVGSlF5eFBRVUZQYWtJc1pVRkJaV1VzVFVGQlppeERRVUZZT3p0QlFVVkJMRTFCUVVsRkxFdEJRVXRETEZWQlFWUXNSVUZCY1VJN1FVRkRia0pETEUxQlFVVkRMR05CUVVZN1FVRkRSQ3hIUVVaRUxFMUJSVTg3UVVGRFRFUXNUVUZCUlVNc1kwRkJSanRCUVVOQmRFSXNXVUZCVVVjc2FVSkJRV2xDYjBJc1NVRkJla0lzUlVGQkswSktMRXRCUVV0TExFOUJRWEJETEVWQlFUWkRUaXhIUVVFM1F6dEJRVU5FTzBGQlEwWXNRMEZZUkNJc0ltWnBiR1VpT2lKdFlXbHVMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVkyOXVjM1FnZUdoeVVHOXpkQ0E5SUhKbGNYVnBjbVVvSnk0dmJHbGlMM2hvY2w5d2IzTjBKeWs3WEhKY2JtTnZibk4wSUdadmNtMVdZV3hwWkdGMGFXOXVJRDBnY21WeGRXbHlaU2duTGk5c2FXSXZabTl5YlY5MllXeHBaR0YwYVc5dUp5azdYSEpjYm1OdmJuTjBJSEpsZG1sbGQwTnlaV0YwWlVadmNtMGdQU0JrYjJOMWJXVnVkQzVtYjNKdGN5NXlaWFpwWlhkRGNtVmhkR1U3WEhKY2JtTnZibk4wSUhKbGRtbGxkME55WldGMFpWTjFZbTFwZENBOUlISmxkbWxsZDBOeVpXRjBaVVp2Y20wdWNtVjJhV1YzUTNKbFlYUmxVM1ZpYldsME8xeHlYRzVjY2x4dWQybHVaRzkzTG05dWJHOWhaQ0E5SUNncElEMCtJSHRjY2x4dUlDQnNaWFFnWld4bGJXVnVkSE1nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdWJXUnNMV3B6TFhSbGVIUm1hV1ZzWkNjcE8xeHlYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1pXeGxiV1Z1ZEhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjY2x4dUlDQWdJR1ZzWlcxbGJuUnpXMmxkTG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjJsekxXbHVkbUZzYVdRbktUdGNjbHh1SUNCOVhISmNibjA3WEhKY2JseHlYRzR2THlEUW9kQ3kwTFhRdHRDdzBZOGcwTHJSZ05DKzBMTFJqRnh5WEc1eVpYWnBaWGREY21WaGRHVlRkV0p0YVhRdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCbElEMCtJSHRjY2x4dUlDQnNaWFFnYVc1d2RYUnpJRDBnY21WMmFXVjNRM0psWVhSbFJtOXliUzVsYkdWdFpXNTBjenRjY2x4dUlDQnNaWFFnZFhKc0lEMGdYQ0l2Y21WMmFXVjNjeTlqY21WaGRHVmNJanRjY2x4dUlDQnNaWFFnWkdGMFlTQTlJR1p2Y20xV1lXeHBaR0YwYVc5dUtHbHVjSFYwY3lrN1hISmNibHh5WEc0Z0lHbG1JQ2hrWVhSaExuTjBiM0JUZFdKdGFYUXBJSHRjY2x4dUlDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dUlDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ1pTNXdjbVYyWlc1MFJHVm1ZWFZzZENncE8xeHlYRzRnSUNBZ2VHaHlVRzl6ZENoeVpYWnBaWGREY21WaGRHVkdiM0p0TG01aGJXVXNJR1JoZEdFdVkyaGxZMnRsWkN3Z2RYSnNLVHRjY2x4dUlDQjlPMXh5WEc1OUtUdGNjbHh1WEhKY2JpSmRmUT09XG59LHtcIi4vbGliL2Zvcm1fdmFsaWRhdGlvblwiOjEsXCIuL2xpYi94aHJfcG9zdFwiOjN9XX0se30sWzRdKSJdfQ==
