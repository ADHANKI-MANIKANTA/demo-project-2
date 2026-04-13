# demo-project-2

https://chatgpt.com/share/69dc3e54-3e70-8321-b714-f8e48d4c541c

https://chatgpt.com/share/69dc4119-ea3c-83e8-89c2-e89540ade78d

https://chatgpt.com/share/69dc4cad-3438-83e8-a4fc-e38c65ed1d45


<img width="821" height="203" alt="image" src="https://github.com/user-attachments/assets/ac30e3fa-ca42-4e17-9d9c-893841686a89" />



https://reimagined-space-zebra-5g966gv65x94hv6vp-3000.app.github.dev/events
RESULTS :

{
  "items": [
    {
      "eventId": "evt_ceea6a22-b1ad-4a02-b916-5574f401b413",
      "type": "login",
      "tenantId": "user_123",
      "severity": "info",
      "message": "User logged in",
      "source": "web",
      "metadata": "{}",
      "occurredAt": "2026-04-13T00:48:00.703Z",
      "storedAt": "2026-04-13T00:48:00.703Z"
    },
    {
      "eventId": "evt_ab78cf25-a9dc-439f-bb3f-c87afd7eeaff",
      "type": "login",
      "tenantId": "user_123",
      "severity": "info",
      "message": "User logged in",
      "source": "web",
      "metadata": "{}",
      "occurredAt": "2026-04-13T00:03:31.548Z",
      "storedAt": "2026-04-13T00:03:31.548Z"
    }
  ],
  "total": 2,
  "limit": 20,
  "offset": 0
}

https://reimagined-space-zebra-5g966gv65x94hv6vp-4000.app.github.dev/events
Results :
{
  "items": [
    {
      "eventId": "evt_122d7572-368e-4cca-a748-74d96afd0795",
      "type": "k8s_live",
      "tenantId": "cluster",
      "severity": "info",
      "message": "running in kubernetes",
      "source": "k8s",
      "metadata": "{}",
      "occurredAt": "2026-04-13T01:32:34.107Z",
      "storedAt": "2026-04-13T01:32:34.107Z"
    },
    {
      "eventId": "evt_ab78cf25-a9dc-439f-bb3f-c87afd7eeaff",
      "type": "login",
      "tenantId": "user_123",
      "severity": "info",
      "message": "User logged in",
      "source": "web",
      "metadata": "{}",
      "occurredAt": "2026-04-13T00:03:31.548Z",
      "storedAt": "2026-04-13T00:03:31.548Z"
    }
  ],
  "total": 2,
  "limit": 20,
  "offset": 0
}




curl -v -X POST https://reimagined-space-zebra-5g966gv65x94hv6vp-3000.app.github.dev/events \
-H "Content-Type: application/json" \
-d '{
  "type":"login",
  "tenantId":"user_123",
  "severity":"info",
  "message":"User logged in",
  "source":"web"
}'






====================================================
ADHANKI-MANIKANTA ➜ /workspaces/demo-project-2/skynet-ops-audit-service (main) $ curl -v -X POST https://reimagined-space-zebra-5g966gv65x94hv6vp-3000.app.github.dev/events \
-H "Content-Type: application/json" \
-d '{
  "type":"login",
  "tenantId":"user_123",
  "severity":"info",
  "message":"User logged in",
  "source":"web"
}'
Note: Unnecessary use of -X or --request, POST is already inferred.
* Host reimagined-space-zebra-5g966gv65x94hv6vp-3000.app.github.dev:443 was resolved.
* IPv6: (none)
* IPv4: 20.207.70.99
*   Trying 20.207.70.99:443...
* Connected to reimagined-space-zebra-5g966gv65x94hv6vp-3000.app.github.dev (20.207.70.99) port 443
* ALPN: curl offers h2,http/1.1
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
*  CAfile: /etc/ssl/certs/ca-certificates.crt
*  CApath: /etc/ssl/certs
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384 / X25519 / RSASSA-PSS
* ALPN: server accepted h2
* Server certificate:
*  subject: C=US; ST=Washington; L=Redmond; O=Microsoft Corporation; CN=app.github.dev
*  start date: Mar 20 00:00:00 2026 GMT
*  expire date: Sep 16 23:59:59 2026 GMT
*  subjectAltName: host "reimagined-space-zebra-5g966gv65x94hv6vp-3000.app.github.dev" matched cert's "*.app.github.dev"
*  issuer: C=US; O=DigiCert Inc; CN=DigiCert Global G2 TLS RSA SHA256 2020 CA1
*  SSL certificate verify ok.
*   Certificate level 0: Public key type RSA (2048/112 Bits/secBits), signed using sha256WithRSAEncryption
*   Certificate level 1: Public key type RSA (2048/112 Bits/secBits), signed using sha256WithRSAEncryption
*   Certificate level 2: Public key type RSA (2048/112 Bits/secBits), signed using sha256WithRSAEncryption
* using HTTP/2
* [HTTP/2] [1] OPENED stream for https://reimagined-space-zebra-5g966gv65x94hv6vp-3000.app.github.dev/events
* [HTTP/2] [1] [:method: POST]
* [HTTP/2] [1] [:scheme: https]
* [HTTP/2] [1] [:authority: reimagined-space-zebra-5g966gv65x94hv6vp-3000.app.github.dev]
* [HTTP/2] [1] [:path: /events]
* [HTTP/2] [1] [user-agent: curl/8.5.0]
* [HTTP/2] [1] [accept: */*]
* [HTTP/2] [1] [content-type: application/json]
* [HTTP/2] [1] [content-length: 114]
> POST /events HTTP/2
> Host: reimagined-space-zebra-5g966gv65x94hv6vp-3000.app.github.dev
> User-Agent: curl/8.5.0
> Accept: */*
> Content-Type: application/json
> Content-Length: 114
> 
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* old SSL session ID is stale, removing
< HTTP/2 401 
< date: Sun, 12 Apr 2026 23:59:05 GMT
< content-length: 0
< www-authenticate: tunnel
< x-content-type-options: nosniff
< ratelimit-limit: HttpRequestRatePerPort:1500/m
< ratelimit-remaining: HttpRequestRatePerPort:1499
< ratelimit-reset: HttpRequestRatePerPort:55s
< vssaas-request-id: 0a9b447a-d509-454b-a2fe-d58a0338cf3a
< strict-transport-security: max-age=31536000; includeSubDomains
< x-served-by: tunnels-prod-rel-inc1-v3-cluster
< 
* Connection #0 to host reimagined-space-zebra-5g966gv65x94hv6vp-3000.app.github.dev left intact
@ADHANKI-MANIKANTA ➜ /workspaces/demo-project-2/skynet-ops-audit-service (main) $ 


==================================


{
  "success": true,
  "eventId": "evt_...",
  "storedAt": "..."
}


=============================================

{
  "items": [
    {
      "eventId": "evt_ab78cf25-a9dc-439f-bb3f-c87afd7eeaff",
      "type": "login",
      "tenantId": "user_123",
      "severity": "info",
      "message": "User logged in",
      "source": "web",
      "metadata": "{}",
      "occurredAt": "2026-04-13T00:03:31.548Z",
      "storedAt": "2026-04-13T00:03:31.548Z"
    }
  ],
  "total": 1,
  "limit": 20,
  "offset": 0
}


========================================

@ADHANKI-MANIKANTA ➜ /workspaces/demo-project-2/skynet-ops-audit-service (main) $ docker build -t audit-service .
[+] Building 54.3s (11/11) FINISHED                                                                                                                                         docker:default
 => [internal] load build definition from Dockerfile                                                                                                                                  0.0s
 => => transferring dockerfile: 235B                                                                                                                                                  0.0s
 => [internal] load metadata for docker.io/library/node:18                                                                                                                            2.0s
 => [auth] library/node:pull token for registry-1.docker.io                                                                                                                           0.0s
 => [internal] load .dockerignore                                                                                                                                                     0.0s
 => => transferring context: 2B                                                                                                                                                       0.0s
 => [internal] load build context                                                                                                                                                     2.8s
 => => transferring context: 21.65MB                                                                                                                                                  1.1s
 => [1/5] FROM docker.io/library/node:18@sha256:c6ae79e38498325db67193d391e6ec1d224d96c693a8a4d943498556716d3783                                                                     40.1s
 => => resolve docker.io/library/node:18@sha256:c6ae79e38498325db67193d391e6ec1d224d96c693a8a4d943498556716d3783                                                                      0.0s
 => => sha256:b50082bc3670d0396b2d90e4b0e5bb10265ba5d0ee16bf40f9a505f7045ee563 6.39kB / 6.39kB                                                                                        0.0s
 => => sha256:3e6b9d1a95114e19f12262a4e8a59ad1d1a10ca7b82108adcf0605a200294964 48.49MB / 48.49MB                                                                                      2.7s
 => => sha256:37927ed901b1b2608b72796c6881bf645480268eca4ac9a37b9219e050bb4d84 24.02MB / 24.02MB                                                                                      2.7s
 => => sha256:eb29363371ee2859fad6a3c5af88d4abc6ff7d399addb13b7de3c1f11bdee6b9 2.49kB / 2.49kB                                                                                        0.0s
 => => sha256:79b2f47ad4443652b9b5cc81a95ede249fd976310efdbee159f29638783778c0 64.40MB / 64.40MB                                                                                      2.7s
 => => sha256:c6ae79e38498325db67193d391e6ec1d224d96c693a8a4d943498556716d3783 6.41kB / 6.41kB                                                                                        0.0s
 => => extracting sha256:3e6b9d1a95114e19f12262a4e8a59ad1d1a10ca7b82108adcf0605a200294964                                                                                             4.1s
 => => sha256:e23f099911d692f62b851cf49a1e93294288a115f5cd2d014180e4d3684d34ab 211.36MB / 211.36MB                                                                                    7.9s
 => => sha256:cda7f44f2bddcc4bb7514474024b3f3705de00ddb6355a33be5ac7808e5b7125 3.32kB / 3.32kB                                                                                        3.0s
 => => sha256:c6b30c3f16966552af10ac00521f60355b1fcfd46ac1c20b1038587e28583ce7 45.68MB / 45.68MB                                                                                      4.3s
 => => sha256:3697be50c98b9d071df4637e1d3491d00e7b9f3a732768c876d82309b3c5a145 1.25MB / 1.25MB                                                                                        3.3s
 => => sha256:461077a72fb7fe40d34a37d6a1958c4d16772d0dd77f572ec50a1fdc41a3754d 446B / 446B                                                                                            4.3s
 => => extracting sha256:37927ed901b1b2608b72796c6881bf645480268eca4ac9a37b9219e050bb4d84                                                                                             0.9s
 => => extracting sha256:79b2f47ad4443652b9b5cc81a95ede249fd976310efdbee159f29638783778c0                                                                                             3.3s
 => => extracting sha256:e23f099911d692f62b851cf49a1e93294288a115f5cd2d014180e4d3684d34ab                                                                                            14.2s
 => => extracting sha256:cda7f44f2bddcc4bb7514474024b3f3705de00ddb6355a33be5ac7808e5b7125                                                                                             0.0s
 => => extracting sha256:c6b30c3f16966552af10ac00521f60355b1fcfd46ac1c20b1038587e28583ce7                                                                                             2.8s
 => => extracting sha256:3697be50c98b9d071df4637e1d3491d00e7b9f3a732768c876d82309b3c5a145                                                                                             0.0s
 => => extracting sha256:461077a72fb7fe40d34a37d6a1958c4d16772d0dd77f572ec50a1fdc41a3754d                                                                                             0.0s
 => [2/5] WORKDIR /app                                                                                                                                                                0.0s
 => [3/5] COPY package*.json ./                                                                                                                                                       0.1s
 => [4/5] RUN npm install                                                                                                                                                             4.5s
 => [5/5] COPY . .                                                                                                                                                                    1.8s
 => exporting to image                                                                                                                                                                5.7s
 => => exporting layers                                                                                                                                                               5.7s
 => => writing image sha256:887b199f709f2f14413db935b1964514195ab8589b8367f25849875318cbb95b                                                                                          0.0s
 => => naming to docker.io/library/audit-service                                                                                                                                      0.0s
@ADHANKI-MANIKANTA ➜ /workspaces/demo-project-2/skynet-ops-audit-service (main) $ 


curl -X POST https://reimagined-space-zebra-5g966gv65x94hv6vp-3000.app.github.dev/
/events \
-H "Content-Type: application/json" \
-d '{
  "type":"login",
  "tenantId":"user_123",
  "severity":"info",
  "message":"User logged in",
  "source":"web"
}'




https://reimagined-space-zebra-5g966gv65x94hv6vp-3000.app.github.dev/



ADHANKI-MANIKANTA ➜ /workspaces/demo-project-2/skynet-ops-audit-service (main) $ curl -i -X POST "https://reimagined-space-zebra-5g966gv65x94hv6vp-3000.app.github.dev/events" \
-H "Content-Type: application/json" \
-d '{"type":"login","tenantId":"user_123","severity":"info","message":"User logged in","source":"web"}'
HTTP/2 401 
date: Mon, 13 Apr 2026 00:45:43 GMT
content-length: 0
www-authenticate: tunnel
x-content-type-options: nosniff
ratelimit-limit: HttpRequestRatePerPort:1500/m
ratelimit-remaining: HttpRequestRatePerPort:1499
ratelimit-reset: HttpRequestRatePerPort:31s
vssaas-request-id: 92129b29-0931-4630-80ef-dfabdaab5499
strict-transport-security: max-age=31536000; includeSubDomains
x-served-by: tunnels-prod-rel-inc1-v3-cluster

@ADHANKI-MANIKANTA ➜ /workspaces/demo-project-2/skynet-ops-audit-service (main) $ 



 curl -i -X POST "https://reimagined-space-zebra-5g966gv65x94hv6vp-3000.app.github.dev/events" \
-H "Content-Type: application/json" \
-d '{"type":"login","tenantId":"user_123","severity":"info","message":"User logged in","source":"web"}'
HTTP/2 201 
date: Mon, 13 Apr 2026 00:48:00 GMT
content-type: application/json; charset=utf-8
content-length: 107
cache-control: no-cache,no-store
etag: W/"6b-OIRYz3R0sPRlXfDA5voowwGWQp4"
expires: Thu, 01 Jan 1970 00:00:00 GMT
pragma: no-cache
set-cookie: .Tunnels.Relay.WebForwarding.Cookies=CfDJ8NJJuTEdEi5KqensronCVW3PSpRHHFiEd666DDJu8acnZSOhUDcwM-AaTk3LzP_xYY1Wze0U04UGxrspskINflcaEd0P9p0skwc_hgqWEsJ44Jq4-0t_kJ7uQ_1Td_mi6UiKMd0SceFkMM8x2uTucpNuvKePY-Y718TtebOjtvkAdXbdvK142C9OJn4YRYdxg-il-M5tAVqOJf1d_pEyWPQN8UcFZZDGZsMQE2yD4vk7LHphFsyJRQ_kJDW_RNh9jInElnjzIIFUheUWH3GSNp_NHpG__emYhTlTVHg6uGxVrH9KkrpRy2mRwsdELMdu-bvE7A7z32HF_RqJtvqHOXK16AxRjeRG7s79p_GyMhY76eaMNMM5f5rXBs7Ls8RDyBbRB-tbAdcyHHY06orhIoBrJEpgNrUH9e6sQecF_kZhprSGDIXiXZkRU41Dt1xCAFDvqCJeKhGDyUqRYn019AZ6PkfK51N8uXGUbVRbsSTCg4EPohazHxgC7ZhH7CH7runxnHphyDd_eehOZtbppD0N82klCJD6I94-uBzjEhmQQI5RH5KUyRQK631IWn30enWv8WxPOFdTKUutPcMHNIDRUaBOM0NSzYLwY3_bDw88Hcy8-8tquO17DcN2H4KTqlDYf-NiTUbJd1TVrKA4HmIdZi-4lRMnRFPYaJKfmlTYMlI_qKTqgjeHO2J2AT0IsMeSmAvfJTuQLGSkM_baECajouatPS9h8xLMDwLQMc2w1aIbb0VBocRSluccqM_lhxrdc9qivbp-VvvJ_GOgSUbomABSO9UMbkF59Fbr25pGTMhncznhFUNBa_l8s8mN4oCfzWffj9LGGVIl5tUcELJ8WNnZIXERlfxe0p8MK-H2JzUSIq6Q6m3T6-PRVKE-LeKk0tCL2NIBtCrg0bp0diMyZael9fys2q3k0oJMzvATf7kGoeoYMhMgv6qk4uVKKyKVgMlXT7EZuq_fhi_dbqAfUe_QpR8-2tl0Z7Uh5SlM; path=/; secure; samesite=none; Partitioned
x-content-type-options: nosniff
ratelimit-limit: HttpRequestRatePerPort:1500/m
ratelimit-remaining: HttpRequestRatePerPort:1499
ratelimit-reset: HttpRequestRatePerPort:56s
x-report-abuse: https://msrc.microsoft.com/report/abuse
x-ms-ratelimit-limit: 1500
x-ms-ratelimit-remaining: 1497
x-ms-ratelimit-used: 3
x-ms-ratelimit-reset: 0
x-powered-by: Express
x-robots-tag: noindex, nofollow
referrer-policy: same-origin
vssaas-request-id: 8462307f-07b4-4fed-ab13-7bdef2d17758
strict-transport-security: max-age=31536000; includeSubDomains
x-served-by: tunnels-prod-rel-inc1-v3-cluster

{"success":true,"eventId":"evt_ceea6a22-b1ad-4a02-b916-5574f401b413","storedAt":"2026-04-13T00:48:00.703Z"}@ADHANKI-MANIKANTA ➜ /workspaces/demo-project-2/skynet-ops-audit-service (main) $ 
=================================================================

{
  "items": [
    {
      "eventId": "evt_ceea6a22-b1ad-4a02-b916-5574f401b413",
      "type": "login",
      "tenantId": "user_123",
      "severity": "info",
      "message": "User logged in",
      "source": "web",
      "metadata": "{}",
      "occurredAt": "2026-04-13T00:48:00.703Z",
      "storedAt": "2026-04-13T00:48:00.703Z"
    },
    {
      "eventId": "evt_ab78cf25-a9dc-439f-bb3f-c87afd7eeaff",
      "type": "login",
      "tenantId": "user_123",
      "severity": "info",
      "message": "User logged in",
      "source": "web",
      "metadata": "{}",
      "occurredAt": "2026-04-13T00:03:31.548Z",
      "storedAt": "2026-04-13T00:03:31.548Z"
    }
  ],
  "total": 2,
  "limit": 20,
  "offset": 0
}


	
 $ curl -X POST "https://reimagined-space-zebra-5g966gv65x94hv6vp-4000.app.github.dev/events" \
-H "Content-Type: application/json" \
-d '{"type":"k8s_live","tenantId":"cluster","severity":"info","message":"running in kubernetes","source":"k8s"}'


@ADHANKI-MANIKANTA ➜ /workspaces/demo-project-2/skynet-ops-audit-service (main) $ curl -X POST "https://reimagined-space-zebra-5g966gv65x94hv6vp-4000.app.github.dev/events" -H "Content-Type: application/json" -d '{"type":"k8s_live","tenantId":"cluster","severity":"info","message":"running in kubernetes","source":"k8s"}'
{"success":true,"eventId":"evt_122d7572-368e-4cca-a748-74d96afd0795","storedAt":"2026-04-13T01:32:34.107Z"}@ADHANKI-MANIKANTA ➜ /workspaces/demo-project-2/skynet-ops-audit-service (main) $ 

=================================================


{
  "items": [
    {
      "eventId": "evt_122d7572-368e-4cca-a748-74d96afd0795",
      "type": "k8s_live",
      "tenantId": "cluster",
      "severity": "info",
      "message": "running in kubernetes",
      "source": "k8s",
      "metadata": "{}",
      "occurredAt": "2026-04-13T01:32:34.107Z",
      "storedAt": "2026-04-13T01:32:34.107Z"
    },
    {
      "eventId": "evt_ab78cf25-a9dc-439f-bb3f-c87afd7eeaff",
      "type": "login",
      "tenantId": "user_123",
      "severity": "info",
      "message": "User logged in",
      "source": "web",
      "metadata": "{}",
      "occurredAt": "2026-04-13T00:03:31.548Z",
      "storedAt": "2026-04-13T00:03:31.548Z"
    }
  ],
  "total": 2,
  "limit": 20,
  "offset": 0
}

======================================
{
  "status": "ok",
  "service": "skynet-ops-audit-service",
  "environment": "dev",
  "timestamp": "2026-04-13T00:49:21.067Z"
}

