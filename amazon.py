# -*- coding: utf-8 -*-
import requests
import cookielib
from bs4 import BeautifulSoup
import re
import time

import os


class Amazon:
    amazon_url = "https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.mode=checkid_setup&openid.ns=http://specs.openid.net/auth/2.0&openid.ns.pape=http://specs.openid.net/extensions/pape/1.0&openid.pape.max_auth_age=0&openid.return_to=https://www.amazon.com/?ref_=nav_signin"

    header = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"}

    session = requests.session()

    def __init__(self):
        try:
            self.session.cookies = cookielib.LWPCookieJar(filename="cookies")
            self.session.cookies.load(ignore_discard=True)
        except:
            print("Cookie 未能加载")

    def do(self):
        postData = {}
        postData['email'] = "chenyongcoming@163.com"
        postData['emapasswordil'] = "ceshi163"

        first = self.session.get(self.amazon_url, headers=self.header, allow_redirects=False)
        pattern = re.compile('<input type="hidden" name="(.*?)".*?value="(.*?)".*?>',
                             re.S)
        amazonArgu = re.findall(pattern, first.text.encode("utf-8"))
        for (i, k) in amazonArgu:
            postData[i] = k
        postData[
            'metadata1'] = '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'
        print postData
        postHeader = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.8,en;q=0.6",
            "Cache-Control": "max-age=0",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Cookie": "lc-main=en_US; skin=noskin;csm-hit=BSMMA2X5F1P5X1MBCKY5+b-18EPCGXF7XPS04G2EMAH|1474124494810; session-token=\"ObvEMmGimqrlMb2L5VL5HE2SI/Ymjbp5liSm5+3o92xzAo3DQI/BwnbpiUcoAuRFhfDqoBV85d//T4aDg5Brh8Au2N5AK2OlI6hX796CP8imMrthd3pF8LRP6mfsr7UjUREr3Te6peUDMah6hc83zFGXZOch0LB2P3SovFPeRRrdkZ3vR0ROyMGLnaQenrsBhjOgrYfPMIdXn33D2sYNQd1wKBujG0R5l2qoZ7KPlgg=\";x-main=\"hhWVv@FGc9mxutOslKyVhdMtjrc7vnmGoYyfuhSMmJzkjuJoEHa8fHRce4dHKucz\";at-main=Atza|IwEBIMkMvol_ZACaYyMSkEMG_zD0mcMKWHy1zZ_lm-s1pluSPmZ-nkiNEDXr1BC8OLE6HWt-HRNCk0uyKp-HX_jPRjLbCd-JBEkN3tMDHpJ2xXRbOT-evk_DJCnoecrnSFGVfVKlOQhh-xAyFQ-6cZVr2yKXXCuPhOqDkYY-P3XCCjHc1QbrGAM9pSUEICbwQEgGnCW-NnruQhDq1ib_8BrGiGbMkdLbGD4opKZBLXdILab_CgbGzeGsazDFIXSFj1OUpFiKfFfkwwhM19tCang79wq1O-cFTDtjgC7PptyIEji1y52dV57E5ZcaO_eAiwukziWup8s5fXhjBpWRell-57LsFZTyqM6L-OHrMhltmAAT_MwcBD8Ij_ddPKtFYu7qxE6-l-a2v6zqHrfDJGk3-4bv;sess-at-main=\"iBImavbuoisVkk7WduHtckmIwqKhvTgUvg5SHKyoRYw=\";x-wl-uid=1iKbFnpm5OaZ9phPBPv4aSicn1rg+mnHe3wydMlzSi781+hjsyqINJQnS1fMwFghk3uj1kuMT1+UC84OTKFRgpQ==;ubid-main=167-9105820-6262239;session-id-time=2082787201l;session-id=155-1034799-5998644",
            "Host": "www.amazon.com",
            "Origin": "https://www.amazon.com",
            "Referer": "https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_custrec_signin",
            "Upgrade-Insecure-Requests": 1,
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36"}
        login = self.session.post("https://www.amazon.com/ap/signin", data=postData, headers=postHeader,
                                  allow_redirects=False)
        print login.status_code
        print login.text

        # print re.findall(pattern, str(res.text))
        # soup = BeautifulSoup(res.text, 'lxml')
        # print soup.find_all('input')
        # for i in soup.find_all("input", attrs={"type": "hidden"}):
        #     print re.match("/<input name=\"(.*?)\">/", i)
        # print res.headers
        # print res.text
        self.session.cookies.save()


if __name__ == u'__main__':
    Amazon().do()
